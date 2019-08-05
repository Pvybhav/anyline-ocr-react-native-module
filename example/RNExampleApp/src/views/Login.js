import React, { Component } from "react";
import { StyleSheet, Text, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Body,
  Title,
  Right
} from "native-base";
import NativeBaseButton from "../components/NativeBaseButton";
import MyStatusBar from "../components/MyStatusBar";

const userInfo = { userName: "smith", password: "smith" };

export default class Login extends Component {
  state = {
    userNameInput: "",
    passwordInput: ""
  };

  static navigationOptions = {
    header: null
  };

  handleLogin = async () => {
    const { userNameInput, passwordInput } = this.state;
    const { userName, password } = userInfo;
    if (userName === userNameInput && password === passwordInput) {
      await AsyncStorage.setItem("isUserLogin", "1").catch(err => alert(err));
      await AsyncStorage.setItem("userName", userName).catch(err => alert(err));
      Actions.workOrderSelection();
    } else {
      alert("Please enter valid credentials");
    }
  };

  render() {
    const { handleLogin } = this;
    return (
      <Container>
        <MyStatusBar />
        <Header noLeft>
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>MOBBILL</Text>
            </Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={styles.contentContainerStyle}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onChangeText={userNameInput => this.setState({ userNameInput })}
                autoFocus
                autoCapitalize="none"
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                onChangeText={passwordInput => this.setState({ passwordInput })}
                autoCapitalize="none"
                secureTextEntry
              />
            </Item>
          </Form>
          <NativeBaseButton
            full
            rounded
            onPress={handleLogin}
            buttonText="LOGIN"
            style={styles.buttonStyle}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },

  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  buttonStyle: { marginTop: 50, margin: 20 }
});
