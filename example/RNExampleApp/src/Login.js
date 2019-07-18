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
      // await AsyncStorage.removeItem("isUserLogin");
    }
  };

  render() {
    const {
      handleLogin,
      state: { userName, password, isLoggedIn }
    } = this;
    return (
      // <View style={styles.container}>
      //   <StatusBar
      //     backgroundColor={styles.container.backgroundColor}
      //     barStyle="default"
      //     animated
      //     hidden={false}
      //     networkActivityIndicatorVisible={false}
      //     translucent={false}
      //   />
      //   <Text style={styles.welcome}>Welcome!</Text>
      //   <TextInput
      //     style={styles.input}
      //     placeholder="Enter user name"
      //     value={userName}
      //     onChangeText={userName => this.setState({ userName })}
      //     autoCapitalize="none"
      //   />
      //   <TextInput
      //     style={styles.input}
      //     placeholder="Enter password"
      //     value={password}
      //     onChangeText={password => this.setState({ password })}
      //     secureTextEntry
      //   />
      //   <View>
      //     <TouchableOpacity
      //       style={{
      //         textAlign: "center",
      //         backgroundColor: "rgb(24, 68, 38)",
      //         padding: 10
      //       }}
      //       onPress={handleLogin}
      //     >
      //       <Text style={styles.buttonText}>Login</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
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
            <Item fixedLabel>
              <Label style={styles.labelTextStyle}>Username</Label>
              <Input
                value={userName}
                onChangeText={userName => this.setState({ userName })}
                autoCapitalize="none"
              />
            </Item>
            <Item fixedLabel last>
              <Label style={styles.labelTextStyle}>Password</Label>
              <Input
                value={password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
              />
            </Item>
          </Form>
          <Button full rounded onPress={handleLogin}>
            <Text style={styles.loginTextStyle}>Login</Text>
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