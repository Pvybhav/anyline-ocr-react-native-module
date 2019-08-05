import React, { Component } from "react";
import { StyleSheet, View, Alert, Dimensions } from "react-native";
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
  Title,
  Subtitle,
  Text
} from "native-base";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-community/async-storage";
import MyStatusBar from "../components/MyStatusBar";

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
    Alert.alert(item);
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    );
  };

  handleWorkOrderCard = workOrder => Actions.servicepointdetails({ workOrder });

  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };

  hanleBackButtonClick = () => Actions.pop();

  render() {
    const {
      hanleBackButtonClick,
      handleWorkOrderCard,
      handleLogout,
      state: { workOrders }
    } = this;

    return (
      <Container>
        <MyStatusBar />
        <Header>
          <Left>
            <Button transparent onPress={hanleBackButtonClick}>
              <AntDesignIcon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={styles.headerContentStyle}>Work Orders</Text>
            </Title>
            <Subtitle>
              <Text style={{ color: "white", fontStyle: "italic" }}>
                Hello, Smith
              </Text>
            </Subtitle>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={handleLogout}>
              <AntDesignIcon name="logout" size={30} color="#ffb10a" />
            </Button>
          </Right>
        </Header>
        <Content>
          {workOrders.map(workOrder => (
            <Card key={workOrder.SPID}>
              <CardItem
                header
                button
                onPress={() => handleWorkOrderCard(workOrder)}
                style={styles.cardHeaderStyle}
              >
                <Text>{`SPID : ${workOrder.SPID}`}</Text>
              </CardItem>
              <CardItem button onPress={() => handleWorkOrderCard(workOrder)}>
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
                onPress={() => handleWorkOrderCard(workOrder)}
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
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
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
