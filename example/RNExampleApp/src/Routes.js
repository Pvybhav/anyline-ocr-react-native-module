import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { Router, Scene } from "react-native-router-flux";
import Login from "./views/Login";
import WorkOrderSelection from "./views/WorkOrderSelection";
import SelectArea from "./views/SelectArea";
import WorkOrders from "./views/WorkOrders";
import ServicePointDetails from "./ServicePointDetails";
import LoadingSpinner from "./LoadingSpinner";
import BarcodeResult from "./BarcodeResult";
import MeterReadResult from "./MeterReadResult";
import Acknowledgement from "./Acknowledgement";
import CapturePhoto from "./CapturePhoto";

class Routes extends Component {
  state = {
    isUserLogin: false
  };
  async componentWillMount() {
    const isUserLogin = await AsyncStorage.getItem("isUserLogin");
    let loginStatus = false;
    if (isUserLogin === "1") {
      loginStatus = true;
    }
    this.setState({ isUserLogin: loginStatus });

    // await AsyncStorage.getItem("isUserLogin", (err, isUserLogin) => {
    //   alert(isUserLogin);
    //   if (isUserLogin != null) {
    //     this.setState({ isUserLogin });
    //   }
    //   if (__DEV__) {
    //     alert("routes", this.state); // return true or false if user logged in or not
    //   }
    // });
  }
  authenticate = () => {
    this.state.isUserLogin ? true : false;
  };
  render() {
    // alert(this.state.isUserLogin);
    return (
      <Router
      // backAndroidHandler={() => Actions.pop()}
      >
        <Scene key="root">
          <Scene
            key="spinner"
            component={LoadingSpinner}
            initial
            on={this.authenticate}
            success={WorkOrderSelection}
            failure={Login}
          />
          <Scene
            key="login"
            component={Login}
            title="Login"
            initial={!this.state.isUserLogin}
            back
            renderBackButton={() => renderBackButton()}
          />
          <Scene
            key="workOrderSelection"
            component={WorkOrderSelection}
            title="Select Work Order Type"
            type="replace"
            initial={this.state.isUserLogin}
          />
          <Scene
            key="selectArea"
            component={SelectArea}
            title="Select Area"
            renderLeftButton={() => null}
          />
          <Scene
            key="workorders"
            component={WorkOrders}
            title="Work Orders"
            renderLeftButton={() => null}
          />
          <Scene
            key="servicepointdetails"
            component={ServicePointDetails}
            title="Service Point Details"
          />
          <Scene
            key="barcodeResult"
            component={BarcodeResult}
            title="Barcode Result"
          />
          <Scene
            key="meterReadResult"
            component={MeterReadResult}
            title="Meter Read Result"
          />
          <Scene
            key="acknowledgement"
            component={Acknowledgement}
            title="Acknowledgement"
          />
          <Scene
            key="capturePhoto"
            component={CapturePhoto}
            title="Capture Photo"
          />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
