import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
  Text,
  SectionList,
  Alert
} from "react-native";

export default class WorkOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrders: [
        { SPID: "1", date: "20/07/2019", meterNumber: 23456786754351 },
        { SPID: "2", date: "21/07/2019", meterNumber: 23456786754352 },
        { SPID: "3", date: "21/07/2019", meterNumber: 23456786754353 },
        { SPID: "4", date: "20/07/2019", meterNumber: 23456786754354 },
        { SPID: "5", date: "21/07/2019", meterNumber: 23456786754355 },
        { SPID: "6", date: "22/07/2019", meterNumber: 23456786754356 },
        { SPID: "7", date: "24/07/2019", meterNumber: 23456786754357 },
        { SPID: "8", date: "25/07/2019", meterNumber: 23456786754358 },
        { SPID: "9", date: "26/07/2019", meterNumber: 23456786754359 },
        { SPID: "10", date: "22/07/2019", meterNumber: 23456786754360 },
        { SPID: "11", date: "26/07/2019", meterNumber: 23456786754361 },
        { SPID: "12", date: "28/07/2019", meterNumber: 23456786754362 },
        { SPID: "13", date: "29/07/2019", meterNumber: 23456786754363 },
        { SPID: "14", date: "30/07/2019", meterNumber: 23456786754364 }
      ]
    };
  }
  static navigationOptions = {
    header: null
  };

  GetSectionListItem = item => {
    //Function for click on an item
    Alert.alert(item);
  };
  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };
  render() {
    const {
      state: { workOrders }
    } = this;
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
        <Text>WorkOrders</Text>
        <View style={{ marginTop: Platform.OS == "ios" ? 20 : 30 }}>
          <SectionList
            ItemSeparatorComponent={this.FlatListItemSeparator}
            sections={[{ title: "Work Orders", data: workOrders }]}
            renderSectionHeader={({ section }) => (
              <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
            )}
            renderItem={({ item }) => (
              // Single Comes here which will be repeatative for the FlatListItems
              <Text
                style={styles.SectionListItemStyle}
                //Item Separator View
                onPress={this.GetSectionListItem.bind(
                  this,
                  "Id: " +
                    item.SPID +
                    " Name: " +
                    item.date +
                    "Meter Number" +
                    item.meterNumber
                )}
              >
                {item.meterNumber}
              </Text>
            )}
            keyExtractor={(item, index) => index}
          />
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
  }
});
