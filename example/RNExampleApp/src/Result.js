<<<<<<< HEAD
import React from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions
} from "react-native";
import { flattenObject } from "./utils/utils";
=======
import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import { flattenObject } from './utils/utils';
>>>>>>> ed5917714ec20fdb422ea2bcc130f40b6dab51cf

export default function Result({
  result,
  imagePath,
  fullImagePath,
  emptyResult,
<<<<<<< HEAD
  currentScanMode
}) {
  let fullImage = <View />;
  let fullImageText = <View />;
  if (fullImagePath && fullImagePath != "") {
    fullImage = (
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={{ uri: `file://${fullImagePath}` }}
      />
=======
  currentScanMode,
}) {
  let fullImage = (<View />);
  let fullImageText = (<View />);
  if (fullImagePath && fullImagePath != '') {
    fullImage = (
      <Image
        style={styles.image}
        resizeMode={'contain'}
        source={{ uri: `file://${fullImagePath}` }}
      />);
    fullImageText = (
      <Text style={styles.text}>Full Image:</Text>
>>>>>>> ed5917714ec20fdb422ea2bcc130f40b6dab51cf
    );
    fullImageText = <Text style={styles.text}>Full Image:</Text>;
  }

  const flattenResult = flattenObject(result);
<<<<<<< HEAD

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {fullImageText}
        {fullImage}

        <Text style={styles.text}>Cutout:</Text>
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={{ uri: `file://${imagePath}` }}
        />
        {Object.keys(flattenResult).map((value, key) => {
          return value === "detectedBarcodes" ? (
            <View>
              <Text style={styles.headline}>Detected Barcodes</Text>
              {flattenResult[value].map((valueBar, keyBar) => (
                <View key={`Result_Text_${keyBar}`}>
                  <Text style={styles.text}>Format: {valueBar.format}</Text>
                  <Text style={styles.text}>Value: {valueBar.value}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text style={styles.text} key={`Result_Text_${key}`}>
              {(value !== "confidence" || flattenResult[value] > 0) &&
                `${value}: ${flattenResult[value]}`}
            </Text>
          );
        })}
        <View style={styles.backButton}>
          <Button title={"Back"} onPress={emptyResult} />
=======

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} >

        {fullImageText}
        {fullImage}

        <Text style={styles.text}>Cutout:</Text>
        <Image
          style={styles.image}
          resizeMode={'contain'}
          source={{ uri: `file://${imagePath}` }}
        />
        {Object.keys(flattenResult).map((value, key) => {
          return (value === 'detectedBarcodes') ? (
            <View>
              <Text style={styles.headline}>Detected Barcodes</Text>
              {flattenResult[value].map((valueBar, keyBar) =>
                (<View key={`Result_Text_${keyBar}`}>
                  <Text style={styles.text} >Format: {valueBar.format}</Text>
                  <Text style={styles.text} >Value: {valueBar.value}</Text>
                </View>))}
            </View>)
            :
            (<Text style={styles.text} key={`Result_Text_${key}`}>
              {(value !== 'confidence' || flattenResult[value] > 0) &&
                `${value}: ${flattenResult[value]}`
              }
            </Text>);
        })}
        <View style={styles.backButton}>
          <Button title={'Back'} onPress={emptyResult} />
>>>>>>> ed5917714ec20fdb422ea2bcc130f40b6dab51cf
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // flex: 1,
    height: 300,
<<<<<<< HEAD
    width: Dimensions.get("window").width,
    alignSelf: "stretch"
=======
    width: Dimensions.get('window').width,
    alignSelf: 'stretch',
>>>>>>> ed5917714ec20fdb422ea2bcc130f40b6dab51cf
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#303030",
    marginBottom: 50,
    marginTop: 50,
  },
  headline: {
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    fontSize: 15,
    justifyContent: 'center',
  },
  headline: {
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    fontSize: 15,
    justifyContent: "center"
  },
  text: {
    color: "white",
    justifyContent: "space-around",
    marginTop: 5
  },
  scrollContainer: {
<<<<<<< HEAD
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column"
=======
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
>>>>>>> ed5917714ec20fdb422ea2bcc130f40b6dab51cf
  },

  backButton: {
    marginTop: 25,
    width: "100%"
  }
});
