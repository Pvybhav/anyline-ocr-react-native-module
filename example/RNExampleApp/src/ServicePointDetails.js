import React, { Component } from "react";
import { StyleSheet, StatusBar } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

// import CardView from "react-native-cardview";
import { Actions } from "react-native-router-flux";
import Icon from "react-native-vector-icons/AntDesign";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
  Title,
  Subtitle,
  Right
} from "native-base";

export default class ServicePointDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };
  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };

  render() {
    const { SPID, date, meterNumber, address } = this.props.workOrder;
    const { handleLogout } = this;
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
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={styles.headerContentStyle}>
                Service Point Details
              </Text>
            </Title>
            <Subtitle>
              <Text style={{ color: "white", fontStyle: "italic" }}>
                Hello, Smith
              </Text>
            </Subtitle>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent onPress={handleLogout}>
              <Icon name="logout" size={30} color="#ffb10a" />
            </Button>
          </Right>
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <Card style={{ flex: 0.8, height: "80%" }}>
            <CardItem header>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Meter Details
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.cardView_InsideText}>SPID : {SPID} </Text>
                <Text style={styles.cardView_InsideText}>Date : {date} </Text>
                <Text style={styles.cardView_InsideText}>
                  Meter No : {meterNumber}
                </Text>
                <Text style={styles.cardView_InsideText}>
                  Address : {address}
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button full rounded onPress={() => Actions.anyline()}>
            <Text style={styles.scanMeterTextStyle}>Scan Meter</Text>
          </Button>
        </Content>
      </Container>
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
  cardView_InsideText: {
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    marginTop: 10,
    padding: 5
  },
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
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
  },
  scanMeterTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
