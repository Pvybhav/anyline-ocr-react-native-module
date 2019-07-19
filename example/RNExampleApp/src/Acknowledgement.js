import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
// import ServicePointDetails from "./ServicePointDetails";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";

const userInfo = { userName: "smith", password: "smith" };
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Left,
  Body,
  Title,
  Right
} from "native-base";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = {
    header: null
  };

  render() {
    const {
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
          <Left />
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>MOBBILL</Text>
            </Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <Text>
            SUCCESS!!! Meter reading captured successfully. Acknowledgement ID:
            11223312
          </Text>
          <Button
            full
            rounded
            //   onPress={handleLogin}
          >
            <Text style={styles.loginTextStyle}>OK</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#fff"
  },
  input: {
    width: "90%",
    backgroundColor: "#d6e6ff",
    padding: 15,
    marginBottom: 10
  },
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%"
  },
  buttonText: {
    textAlign: "center",
    margin: 0,
    fontSize: 20,
    color: "#fff"
  },
  button: {
    backgroundColor: "#275aab",
    padding: 10,
    width: "45%"
  },
  labelTextStyle: {
    fontWeight: "bold"
  },
  loginTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
