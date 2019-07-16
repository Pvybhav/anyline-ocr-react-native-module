import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";
import CardView from "react-native-cardview";

export default class ServicePointDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // static navigationOptions = {
  //   header: null
  // };

  render() {
    const { SPID, date, meterNumber, address } = this.props.workOrder;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={styles.container.backgroundColor}
          barStyle="default"
          animated
          hidden={false}
          networkActivityIndicatorVisible={false}
          translucent={false}
        />
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
          <Text style={styles.cardView_InsideText}>Address : {address} </Text>
        </CardView>
        <View>
          <TouchableOpacity
            style={{
              textAlign: "center",
              backgroundColor: "rgb(24, 68, 38)",
              padding: 10,
              marginTop: 10
            }}
          >
            <Text style={styles.buttonText}>Scan Meter</Text>
          </TouchableOpacity>
        </View>
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
  cardViewStyle: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height - "180"
  },
  cardView_InsideText: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    marginTop: 10,
    padding: 5
  },
  scanMeterButton: {
    marginTop: 10,
    marginBottom: 10
  },
  buttonText: {
    textAlign: "center",
    margin: 0,
    fontSize: 20,
    color: "#fff"
  }
});
