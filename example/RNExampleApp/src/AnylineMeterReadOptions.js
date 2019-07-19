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
    >
      <Text style={styles.scanMeterTextStyle}>Scan Meter</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  scanMeterTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
