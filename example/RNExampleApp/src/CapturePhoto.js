import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  ActivityIndicator,
  PermissionsAndroid
} from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";
import { Actions } from "react-native-router-flux";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var that = this;
    const {
      imagePath,
      fullImagePath,
      currentScanMode,
      SPID,
      reading,
      accountNumber
    } = this.props;
    this.state = {
      isPermitted: false,
      imagePath,
      fullImagePath,
      currentScanMode,
      SPID,
      reading,
      accountNumber
    };
    console.log(this.props);
    async function requestCameraPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "CameraExample App Camera Permission",
            message: "CameraExample App needs access to your camera "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          requestExternalWritePermission();
        } else {
          alert("CAMERA permission denied");
        }
      } catch (err) {
        alert("Camera permission err", err);
        console.warn(err);
      }
    }
    async function requestExternalWritePermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "CameraExample App External Storage Write Permission",
            message:
              "CameraExample App needs access to Storage data in your SD Card "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          requestExternalReadPermission();
        } else {
          alert("WRITE_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        alert("Write permission err", err);
        console.warn(err);
      }
    }
    async function requestExternalReadPermission() {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "CameraExample App Read Storage Write Permission",
            message: "CameraExample App needs access to your SD Card "
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          that.setState({ isPermitted: true });
        } else {
          alert("READ_EXTERNAL_STORAGE permission denied");
        }
      } catch (err) {
        alert("Read permission err", err);
        console.warn(err);
      }
    }
    requestCameraPermission();
  }

  onBottomButtonPressed(event) {
    const captureImages = event.captureImages;
    const {
      imagePath,
      fullImagePath,
      currentScanMode,
      SPID,
      reading,
      accountNumber
    } = this.state;
    if (event.type === "left") {
      this.setState({ isPermitted: false });
    }
    // else if(event.type === 'capture'){
    //   return true;
    // }
    else {
      Actions.meterReadResult({
        captureImages,
        capturestate: true,
        imagePath,
        fullImagePath,
        currentScanMode,
        SPID,
        reading,
        accountNumber
      });
    }
  }

  render() {
    if (this.state.isPermitted) {
      return (
        <CameraKitCameraScreen
          actions={{ rightButtonText: "Done", leftButtonText: "Cancel" }}
          onBottomButtonPressed={event => this.onBottomButtonPressed(event)}
          flashImages={{
            on: require("./assets/images/flashOn.png"),
            off: require("./assets/images/flashOff.png"),
            auto: require("./assets/images/flashAuto.png")
          }}
          cameraFlipImage={require("./assets/images/cameraFlipIcon.png")}
          captureButtonImage={require("./assets/images/cameraButton.png")}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
