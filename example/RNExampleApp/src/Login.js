import React, { Component } from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
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
    this.state = {
      userName: "",
      password: "",
      showToast: false,
      visible: false,
      isLoggedIn: false
    };
  }
  static navigationOptions = {
    header: null
  };

  handleLogin = async () => {
    const { userName, password } = this.state;
    if (userInfo.userName === userName && userInfo.password === password) {
      await AsyncStorage.setItem("isUserLogin", "1").catch(err =>
        alert("Error while setting isUserLogin to AsyncStorage")
      );
      Actions.workOrderSelection();
    } else {
      alert("Please enter valid credentials");
    }
  };

  render() {
    const {
      handleLogin,
      state: { userName, password, isLoggedIn }
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
          <Form>
            <Item >
              <Label>Username</Label>
              <Input
                value={userName}
                onChangeText={userName => this.setState({ userName })}
                autoFocus
                autoCapitalize="none"
              />
            </Item>
            <Item >
              <Label>Password</Label>
              <Input
                value={password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button
            full
            rounded
            onPress={handleLogin}
            style={styles.loginButtonStyle}
          >
            <Text style={styles.loginTextStyle}>LOGIN</Text>
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
  loginButtonStyle: {
    margin: 10,
    marginTop: 50
    // marginRight: 10,
    // width: "100%"
  },
  loginTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    width: "100%",
    textAlign: "center"
  }
});
