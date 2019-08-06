import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
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
import MyStatusBar from "./components/MyStatusBar";

export default class Acknowledgement extends Component {
  state = { acknowledgementNumber: "11223313" };

  static navigationOptions = {
    header: null
  };

  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };

  hanleBackButtonClick = () => Actions.pop();

  handleOKPress = () => Actions.submissionSummary();

  render() {
    const {
      hanleBackButtonClick,
      handleLogout,
      handleOKPress,
      state: { acknowledgementNumber }
    } = this;
    return (
      <Container>
        <MyStatusBar />
        <Header>
          <Left>
            <Button transparent onPress={hanleBackButtonClick}>
              <Icon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>Acknowledgement</Text>
            </Title>
            <Subtitle>
              <Text style={{ color: "white", fontStyle: "italic" }}>
                Hello, Smith
              </Text>
            </Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={handleLogout}>
              <Icon name="logout" size={30} color="#ffb10a" />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.contentContainerStyle}>
          <Text style={styles.successTextStyle}>Success !!!</Text>

          <Text
            style={{ justifyContent: "center" }}
            style={styles.successMessageStyle}
          >
            {"\n"}Meter reading captured successfully. {"\n"}
            {"\n"}
            Acknowledgement ID:{" "}
            <Text style={styles.acknowledgementNoStyle}>
              {acknowledgementNumber}
            </Text>
          </Text>

          <View
            style={{
              width: "100%",
              // height: "30%",
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <NativeBaseButton
              full
              rounded
              onPress={handleOKPress}
              buttonText="OK"
              style={styles.buttonStyle}
            />
          </View>
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
    alignItems: "center",
    width: "100%"
  },
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  successTextStyle: {
    fontSize: 25,
    color: "green",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  successMessageStyle: {
    fontSize: 15,
    color: "black",
    justifyContent: "center"
  },
  acknowledgementNoStyle: {
    fontWeight: "bold",
    fontSize: 18
  },
  buttonStyle: {
    margin: 10
  }
});
