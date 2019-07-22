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

export default class Acknowledgement extends Component {
  constructor(props) {
    super(props);
    this.state = { acknowledgementNumber: "11223313" };
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
      state: { acknowledgementNumber }
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
            alignItems: "center",
            width: "100%"
          }}
        >
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
            <Button
              full
              rounded
              // onPress={() => Actions.summary()}
              style={styles.okButtonStyle}
            >
              <Text style={styles.okButtonTextStyle}>OK</Text>
            </Button>
          </View>
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
    justifyContent: "center",
  },
  acknowledgementNoStyle: {
    fontWeight: "bold",
    fontSize: 18
  },
  okButtonStyle: {
    margin: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  okButtonTextStyle: {
    fontWeight: "bold",
    alignContent: "center",
    color: "white",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center"
  }
});
