import React, { Component } from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Content,
  Button,
  Left,
  Body,
  Title,
  Right,
  Subtitle
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

export default class Acknowledgement extends Component {
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
    const {
      handleLogout,
      state: {}
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
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={styles.headerContentStyle}>Barcode Result</Text>
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
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.successTextStyle}>SUCCESS!!!</Text>
          <Text style={{ justifyContent: "center" }}>
            Meter reading captured successfully.
          </Text>
          <Text style={{ justifyContent: "center" }}>
            Acknowledgement ID: 11223312
          </Text>
          <Button
            full
            rounded
            // onPress={() => Actions.summary()}
          >
            <Text style={styles.okButtonStyle}>OK</Text>
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
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  okButtonStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  successTextStyle: {
    fontSize: 25,
    color: "green",
    fontWeight: "bold",
    justifyContent: "center"
  }
});
