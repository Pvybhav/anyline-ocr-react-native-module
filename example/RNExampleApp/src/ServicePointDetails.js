import React, { Component } from "react";
import { StyleSheet, View, StatusBar, Text } from "react-native";
import CardView from "react-native-cardview";

export default class ServicePointDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };

  render() {
    const { SPID, date, meterNumber } = {
      SPID: "14",
      date: "30/07/2019",
      meterNumber: 23456786754364
    };
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgb(51, 214, 102)"
          barStyle="default"
          animated
          hidden
          networkActivityIndicatorVisible={false}
          translucent={false}
        />
        <Text>WorkOrder Details</Text>

        <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={5}
          style={styles.cardViewStyle}
        >
          <Text style={styles.cardView_InsideText}>SPID : {SPID} </Text>
          <Text style={styles.cardView_InsideText}>Date : {date} </Text>
          <Text style={styles.cardView_InsideText}>
            Meter No : {meterNumber}
          </Text>
        </CardView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#338779"
  },
  SectionHeaderStyle: {
    backgroundColor: "#CDDC89",
    fontSize: 20,
    padding: 5,
    color: "#fff"
  },

  SectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: "#000",
    backgroundColor: "#F5F5F5"
  },
  cardViewStyle: {
    width: 250,
    height: 150
  },

  cardView_InsideText: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    marginTop: 10
  }
});
