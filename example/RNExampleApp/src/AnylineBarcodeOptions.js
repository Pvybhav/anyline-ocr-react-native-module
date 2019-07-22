import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Button, Text, Container } from "native-base";

export default function AnylineBarcodeOptions({
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
      onPress={() => platformPermissionCheck("BARCODE")}
      disabled={disabled}
      style={styles.scanBarcode}
    >
      <Text style={styles.scanMeterTextStyle}>Scan Barcode</Text>
    </Button>
  );
}

const styles = StyleSheet.create({
  scanBarcode: {
    margin: 10
  },
  scanMeterTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
