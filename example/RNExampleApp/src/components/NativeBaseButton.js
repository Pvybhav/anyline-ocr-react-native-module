import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "native-base";

export default (NativeBaseButton = props => {
  return (
    <Button {...props}>
      <Text style={styles.loginTextStyle}>{props.buttonText}</Text>
    </Button>
  );
});

const styles = StyleSheet.create({
  loginButtonStyle: {
    margin: 30
  },
  loginTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center"
  }
});
