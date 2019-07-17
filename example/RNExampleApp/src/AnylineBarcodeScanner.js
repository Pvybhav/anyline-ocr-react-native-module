import React, { Component } from "react";
import {
  AppRegistry,
  BackHandler,
  LayoutAnimation,
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text
} from "react-native";

import AnylineOCR from "anyline-ocr-react-native-module";

import Result from "./Result";
import AnylineBarcodeOptions from "./AnylineBarcodeOptions";

import BarcodeConfig from "../config/BarcodeConfig";
import BarcodePDF417Config from "../config/Barcode_PDF417Config";
import DocumentConfig from "../config/DocumentConfig";
import MRZConfig from "../config/MRZConfig";
import AutoEnergyConfig from "../config/AutoEnergyConfig";
import AnalogEnergyConfig from "../config/AnalogMeterConfig";
import DigitalEnergyConfig from "../config/DigitalMeterConfig";
import DialEnergyConfig from "../config/DialMeterConfig";
import IBANConfig from "../config/IbanConfig";
import VoucherConfig from "../config/VoucherConfig";
import DrivingLicenseConfig from "../config/DrivingLicenseConfig";
import LicensePlateConfig from "../config/LicensePlateConfig";
import SerialNumberConfig from "../config/SerialNumber";
import VinConfig from "../config/VINConfig";
import USNRConfig from "../config/USNRConfig";
import ShipConConfig from "../config/ContainerShipConfig";
import CattleTagConfig from "../config/CattleTagConfig";
import GermanIDFrontConfig from "../config/GermanIDFrontConfig";
import VerticalContainerConfig from "../config/VerticalContainerConfig";
import Login from "./Login";

import { Actions } from "react-native-router-flux";

// Disable Warnings
console.disableYellowBox = true;

export default class AnylineBarcodeScanner extends Component {
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

  openAnyline = async type => {
    this.setState({ buttonsDisabled: true });
    let config;

    this.setState({
      currentScanMode: type
    });
    switch (type) {
      case "AUTO_ANALOG_DIGITAL_METER":
        config = AutoEnergyConfig;
        break;
      case "BARCODE":
        config = BarcodeConfig;
        break;
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

      console.log(result);
      this.setState({ buttonsDisabled: false });

      const data = JSON.parse(result);
      LayoutAnimation.easeInEaseOut();
      const fullImagePath = data.fullImagePath;
      const imagePath = data.imagePath;

      delete data.fullImagePath;
      delete data.imagePath;

      this.setState({
        hasScanned: true,
        result: data,
        imagePath: imagePath,
        fullImagePath: fullImagePath
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
        console.log("Camera permission allowed");
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
    alert("checking permission");
    this.hasCameraPermission().then(hasCameraPermission => {
      console.log("hasCameraPermission result is " + hasCameraPermission);
      if (hasCameraPermission) {
        console.log("Opening OCR directly");
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
      imagePath,
      fullImagePath,
      currentScanMode,
      buttonsDisabled,
      SDKVersion
    } = this.state;

    BackHandler.addEventListener("hardwareBackPress", () => {
      if (hasScanned) {
        this.emptyResult();
        return true;
      } else {
        BackHandler.exitApp();
      }
    });

    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.ContainerContent}
      >
        <Text style={styles.headline}>Anyline React-Native Example</Text>
        {hasScanned ? (
          Actions.barcodeResult({
            currentScanMode,
            result,
            imagePath,
            fullImagePath,
            data: result,
            emptyResult: this.emptyResult
          })
        ) : (
          // <Result
          //   key="ResultView"
          //   currentScanMode={currentScanMode}
          //   result={result}
          //   imagePath={imagePath}
          //   fullImagePath={fullImagePath}
          //   data={result}
          //   emptyResult={this.emptyResult}
          // />
          <AnylineBarcodeOptions
            key="AnylineBarcodeOptions"
            openAnyline={this.openAnyline}
            checkCameraPermissionAndOpen={this.checkCameraPermissionAndOpen}
            disabled={buttonsDisabled}
          />
        )}
        {/* <Text style={styles.versions}>SDK Version: {SDKVersion}</Text>
        <Text style={styles.versions}>RN-Build Number: 1</Text> */}
      </ScrollView>
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
