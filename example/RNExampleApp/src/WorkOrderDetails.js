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
      workOrders: []
    };
  }
  static navigationOptions = {
    header: null
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
        <Text>WorkOrder Details</Text>
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
