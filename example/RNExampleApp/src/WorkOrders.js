import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
  Text,
  SectionList,
  Alert,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class WorkOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workOrders: [
        {
          SPID: "1",
          date: "20/07/2019",
          meterNumber: 23456786754351,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposit AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "2",
          date: "21/07/2019",
          meterNumber: 23456786754352,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "3",
          date: "21/07/2019",
          meterNumber: 23456786754353,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "4",
          date: "20/07/2019",
          meterNumber: 23456786754354,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "5",
          date: "21/07/2019",
          meterNumber: 23456786754355,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "6",
          date: "22/07/2019",
          meterNumber: 23456786754356,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "7",
          date: "24/07/2019",
          meterNumber: 23456786754357,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "8",
          date: "25/07/2019",
          meterNumber: 23456786754358,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "9",
          date: "26/07/2019",
          meterNumber: 23456786754359,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "10",
          date: "22/07/2019",
          meterNumber: 23456786754360,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "11",
          date: "26/07/2019",
          meterNumber: 23456786754361,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "12",
          date: "28/07/2019",
          meterNumber: 23456786754362,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "13",
          date: "29/07/2019",
          meterNumber: 23456786754363,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        },
        {
          SPID: "14",
          date: "30/07/2019",
          meterNumber: 23456786754364,
          address:
            "51, AL Bastakiya, Near AL Fahidi Round, Opposite AL Mussalla Post Office, AL Fahidi Street, Meena Bazaar, Dubai"
        }
      ]
    };
  }
  // static navigationOptions = {
  //   header: null
  // };

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
        <View
        // style={{ marginTop: Platform.OS == "ios" ? "100%" : "100%" }}
        >
          <SectionList
            ItemSeparatorComponent={this.FlatListItemSeparator}
            style={{ width: "100%" }}
            // sections={[{ title: "Work Orders", data: workOrders }]}
            sections={[{ data: workOrders }]}
            // renderSectionHeader={({ section }) => (
            //   <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
            // )}
            renderItem={({ item }) => (
              // Single Comes here which will be repeatative for the FlatListItems
              <Text
                style={styles.SectionListItemStyle}
                //Item Separator View
                // onPress={this.GetSectionListItem.bind(
                //   this,
                //   "Id: " +
                //     item.SPID +
                //     " Name: " +
                //     item.date +
                //     "Meter Number" +
                //     item.meterNumber
                // )}
                onPress={() => Actions.servicepointdetails({ workOrder: item })}
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
    width: "100%",
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
    flex: 1,
    fontSize: 15,
    width: Dimensions.get("window").width,
    padding: 15,
    color: "#000",
    backgroundColor: "#F5F5F5"
  }
});
