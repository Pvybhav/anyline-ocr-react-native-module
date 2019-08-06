import React, { Component } from "react";
import { StyleSheet, StatusBar } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Content,
  Body,
  Right,
  Button,
  Title,
  Subtitle,
  Text
} from "native-base";
import MyStatusBar from "../components/MyStatusBar";
import NativeBaseButton from "../components/NativeBaseButton";

export default class SubmissionSummary extends Component {
  static navigationOptions = {
    header: null
  };

  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };

  handleMeterReadingOrders = () => Actions.selectArea();

  render() {
    const { handleLogout, handleMeterReadingOrders } = this;
    return (
      <Container style={styles.containerStyle}>
        <MyStatusBar />
        <Header noLeft>
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>MOBBILL</Text>
            </Title>
            <Subtitle>
              <Text style={styles.subtitleStyle}>Hello, Smith</Text>
            </Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={handleLogout}>
              <Icon name="logout" size={30} color="#ffb10a" />
            </Button>
          </Right>
        </Header>
        <Content contentContainerStyle={styles.contentContainerStyle}>
          <NativeBaseButton
            full
            rounded
            onPress={handleMeterReadingOrders}
            buttonText="Meter Reading Orders"
            style={styles.buttonStyle}
          />
          <NativeBaseButton
            full
            rounded
            buttonText="Other Work Orders"
            style={styles.buttonStyle}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  subtitleStyle: { color: "white", fontStyle: "italic" },
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
  buttonStyle: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
});
