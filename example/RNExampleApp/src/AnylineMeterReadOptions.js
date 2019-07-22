import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Button, Text, Container } from "native-base";

export default function AnylineMeterReadOptions({
  openAnyline,
  checkCameraPermissionAndOpen,
  disabled
}) {
  const platformPermissionCheck =
    Platform.OS === "android" ? checkCameraPermissionAndOpen : openAnyline;

  return (
    <Button
      full
      rounded
      onPress={() => platformPermissionCheck("DIGITAL_METER")}
      disabled={disabled}
      style={styles.proceedButtonStyle}
    >
      <Text style={styles.proceedTextStyle}>Proceed</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  proceedButtonStyle: {
    margin: 10
  },
  proceedTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
