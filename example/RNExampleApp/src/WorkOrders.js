import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
  // Text,
  SectionList,
  Alert,
  Dimensions
} from "react-native";
import { Actions } from "react-native-router-flux";

import {
  Container,
  Header,
  Left,
  Content,
  Body,
  Right,
  Button,
  Card,
  CardItem,
  Icon,
  Title,
  Text
} from "native-base";

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
      <Container>
        <StatusBar
          backgroundColor={styles.container.backgroundColor}
          barStyle="default"
          animated
          hidden={false}
          networkActivityIndicatorVisible={false}
          translucent={false}
        />
        <Header>
          {/* <Left>
            <Button transparent>
              <Icon name="arrow-back" />
              <Text>Back</Text>
            </Button>
          </Left> */}
          <Body>
            <Title>Work Orders</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Text>Cancel</Text>
            </Button> */}
          </Right>
        </Header>
        <Content>
          {workOrders.map(workOrder => (
            <Card key={workOrder.SPID}>
              <CardItem
                header
                button
                onPress={() => Actions.servicepointdetails({ workOrder })}
                style={styles.cardHeaderStyle}
              >
                <Text>{`SPID : ${workOrder.SPID}`}</Text>
              </CardItem>
              <CardItem
                button
                onPress={() => Actions.servicepointdetails({ workOrder })}
              >
                <Body>
                  <Text>
                    {` Meter Number : ${workOrder.meterNumber} \n Date : ${
                      workOrder.date
                    }`}
                  </Text>
                </Body>
              </CardItem>
              <CardItem
                footer
                button
                onPress={() => Actions.servicepointdetails({ workOrder })}
              >
                <View>
                  <Text>
                    Meter Read Status :
                    <Text style={styles.pendingStatusStyle}>Pending</Text>
                  </Text>
                </View>
              </CardItem>
            </Card>
          ))}
        </Content>
      </Container>
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
  },
  cardHeaderStyle: {
    backgroundColor: "#c1cfe6",
    height: 10
  },
  pendingStatusStyle: {
    color: "red"
  },
  completedStatusStyle: {
    color: "green"
  }
});
