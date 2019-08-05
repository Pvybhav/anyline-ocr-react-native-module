import React from "react";
import { StatusBar } from "react-native";

export default (MyStatusBar = () => (
  <StatusBar
    backgroundColor={"#338779"}
    barStyle={"default"}
    animated
    hidden={false}
    networkActivityIndicatorVisible={false}
    translucent={false}
  />
));
