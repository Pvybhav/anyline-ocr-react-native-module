import React, { Component } from "react";
import { StatusBar, Image, StyleSheet, View, Dimensions } from "react-native";
import AnylineMeterReadScanner from "./AnylineMeterReadScanner";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Body,
  Title,
  Right,
  Form,
  Label,
  Item,
  Input,
  Button,
  Subtitle
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

export default class BarcodeResult extends Component {
  state = { accountNumber: "", loaded: false };
  static navigationOptions = {
    header: null
  };
  static getDerivedStateFromProps(props, state) {
    const {
      result,
      imagePath,
      fullImagePath,
      emptyResult,
      currentScanMode,
      SPID,
      value: accountNumber
    } = props.result;
    if (state.accountNumber !== accountNumber && state.loaded === false) {
      return {
        result,
        imagePath,
        fullImagePath,
        emptyResult,
        currentScanMode,
        SPID,
        accountNumber,
        loaded: true
      };
    }
    return null;
  }
  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };
  render() {
    const {
      handleLogout,
      state: { accountNumber },
      props: { imagePath, fullImagePath, SPID }
    } = this;
    let fullImage = <View />;
    if (fullImagePath && fullImagePath != "") {
      fullImage = (
        <Image
          style={styles.fullImageStyle}
          resizeMode={"contain"}
          source={{ uri: `file://${fullImagePath}` }}
        />
      );
      fullImageText = (
        <Text style={styles.imageHeaderTextStyle}>Full Image:</Text>
      );
    }
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
        <Content>
          <Text>Full Image:</Text>
          {fullImage}
          <Text>Cutout:</Text>
          <Image
            style={styles.cutoutImageStyle}
            resizeMode={"contain"}
            source={{ uri: `file://${imagePath}` }}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text>{`SPID ${SPID}`}</Text>
          </View>
          <Form>
            <Item {...(isNaN(accountNumber) ? "error" : null)}>
              <Label>Account Number</Label>
              <Input
                value={accountNumber}
                onChangeText={accountNumber => this.setState({ accountNumber })}
                autoFocus
              />
              {isNaN(accountNumber) && (
                <Icon name="close-circle" style={{ color: "red" }} />
              )}
            </Item>
          </Form>
          {/* {!isNaN(accountNumber) && ( */}
          <AnylineMeterReadScanner
            style={{ flex: 0.2, height: "20%" }}
            SPID={SPID}
            accountNumber={accountNumber}
          />
          {/* )} */}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fullImageStyle: {
    flex: 1,
    height: 300,
    width: Dimensions.get("window").width,
    alignSelf: "stretch"
  },
  cutoutImageStyle: {
    flex: 1,
    height: 200,
    width: Dimensions.get("window").width,
    alignSelf: "stretch"
  },
  imageHeaderTextStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#303030",
    marginBottom: 50,
    marginTop: 50
  },
  headline: {
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    fontSize: 15,
    justifyContent: "center"
  },
  scrollContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column"
  },
  buttonStyle: {
    margin: 10
  },
  buttonTextStyle: {
    fontWeight: "bold"
  },
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});
