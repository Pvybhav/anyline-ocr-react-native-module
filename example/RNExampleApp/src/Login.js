import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage
} from "react-native";
import ServicePointDetails from "./ServicePointDetails";

const userInfo = { userName: "vybhav", password: "vybhav" };

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
  componentWillMount() {
    console.log(this.props);
  }

  handleLogin = async () => {
    const { userName, password } = this.state;
    if (userInfo.userName === userName && userInfo.password === password) {
      alert("LoggedIN");
      // await AsyncStorage.setItem("isLoggedIn", "1");
      // navigate("LandingPage");
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
      <View style={styles.container}>
        <StatusBar
          backgroundColor="rgb(51, 214, 102)"
          barStyle="default"
          animated
          hidden
          networkActivityIndicatorVisible={false}
          translucent={false}
        />
        <Text style={styles.welcome}>Welcome!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user name"
          value={userName}
          onChangeText={userName => this.setState({ userName })}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          value={password}
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <View>
          <TouchableOpacity
            style={{
              textAlign: "center",
              backgroundColor: "rgb(24, 68, 38)",
              padding: 10
            }}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        {/* {!isLoggedIn ? <Text>"Not LoggedIN"</Text> : <ServicePointDetails />} */}
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
  }
});
