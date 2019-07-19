import React, { Component } from "react";
import {
  AppRegistry,
  BackHandler,
  LayoutAnimation,
  PermissionsAndroid,
  ScrollView,
  View,
  StyleSheet,
  Text
} from "react-native";

import AnylineOCR from "anyline-ocr-react-native-module";

import MeterReadResult from "./MeterReadResult";
import AnylineMeterReadOptions from "./AnylineMeterReadOptions";

import AnalogEnergyConfig from "../config/AnalogMeterConfig";
import DigitalEnergyConfig from "../config/DigitalMeterConfig";

import { Actions } from "react-native-router-flux";

// Disable Warnings
console.disableYellowBox = true;

export default class AnylineMeterReadScanner extends Component {
  state = {
    hasScanned: false,
    result: "",
    imagePath: "",
    fullImagePath: "",
    currentScanMode: "",
    buttonsDisabled: false,
    SDKVersion: ""
  };
  componentDidMount = async () => {
    const SDKVersion = await AnylineOCR.getSDKVersion();
    this.setState({ SDKVersion: SDKVersion });
  };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  openAnyline = async (type = "DIGITAL_METER") => {
    this.setState({ buttonsDisabled: true });
    let config;

    // this.setState({
    //   currentScanMode: type
    // });
    switch (type) {
      case "ANALOG_METER":
        config = AnalogEnergyConfig;
        break;
      case "DIGITAL_METER":
        config = DigitalEnergyConfig;
        break;
    }

    try {
      const result = await AnylineOCR.setupPromise(
        JSON.stringify(config),
        "scan"
      );

      this.setState({ buttonsDisabled: false });

      const data = JSON.parse(result);
      LayoutAnimation.easeInEaseOut();
      const fullImagePath = data.fullImagePath;
      const imagePath = data.imagePath;

      delete data.fullImagePath;
      delete data.imagePath;

      // this.setState({
      //   hasScanned: true,
      //   result: data,
      //   imagePath: imagePath,
      //   fullImagePath: fullImagePath
      // });

      const { accountNumber, SPID } = this.props;
      Actions.meterReadResult({
        currentScanMode: type,
        reading: data.reading,
        imagePath,
        fullImagePath,
        emptyResult: this.emptyResult,
        SPID,
        accountNumber
      });
    } catch (error) {
      if (error !== "Canceled") {
        console.log(error);
      }
    }
    this.setState({ buttonsDisabled: false });
  };

  requestCameraPermission = async type => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Anyline Camera Permissions",
          message: "Allow Anyline to access you camera?"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.openAnyline(type);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  hasCameraPermission = async () => {
    try {
      return await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
    } catch (err) {
      console.warn(err, "PERMISSION CHECK");
    }
  };

  checkCameraPermissionAndOpen = type => {
    this.hasCameraPermission().then(hasCameraPermission => {
      if (hasCameraPermission) {
        this.openAnyline(type);
      } else {
        this.requestCameraPermission(type);
      }
    });
  };

  emptyResult = () => {
    this.setState({
      hasScanned: false,
      result: "",
      imagePath: "",
      fullImagePath: ""
    });
  };

  render() {
    const {
      hasScanned,
      result,
      // imagePath,
      // fullImagePath,
      // currentScanMode,
      buttonsDisabled
      // SDKVersion
    } = this.state;

    BackHandler.addEventListener("hardwareBackPress", () => {
      if (hasScanned) {
        this.emptyResult();
        return true;
      } else {
        // BackHandler.exitApp();
        BackHandler.removeEventListener("hardwareBackPress");
      }
    });

    let data = result;
    return (
      <View
      // style={styles.container}
      // contentContainerStyle={styles.ContainerContent}
      >
        {/* <Text style={styles.headline}>Anyline React-Native Example</Text> */}
        {hasScanned ? //   data: result, //   fullImagePath, //   imagePath, //   result, //   currentScanMode, // Actions.MeterReadResult({
        //   emptyResult: this.emptyResult
        // })
        null : (
          // <MeterReadResult
          //   currentScanMode={currentScanMode}
          //   result={result}
          //   imagePath={imagePath}
          //   fullImagePath={fullImagePath}
          //   data={result}
          //   emptyResult={this.emptyResult}
          // />
          <AnylineMeterReadOptions
            key="AnylineMeterReadOptions"
            openAnyline={this.openAnyline}
            checkCameraPermissionAndOpen={this.checkCameraPermissionAndOpen}
            disabled={buttonsDisabled}
          />
        )}
        {/* <Text style={styles.versions}>SDK Version: {SDKVersion}</Text>
        <Text style={styles.versions}>RN-Build Number: 1</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  versions: {
    color: "white",
    marginTop: 10
  },
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#303030"
  },
  ContainerContent: {
    // alignItems: "center",
    // justifyContent: "space-around"
  },
  headline: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginTop: 50
  }
});

// AppRegistry.registerComponent("RNExampleApp", () => Anyline);
