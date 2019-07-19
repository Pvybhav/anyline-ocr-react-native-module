import React, { Component } from "react";
import {
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions
} from "react-native";
// import { flattenObject } from "./utils/utils";
import AnylineMeterReadScanner from "./AnylineMeterReadScanner";

import {
  Container,
  Header,
  Content,
  Text,
  Footer,
  FooterTab,
  Button,
  Left,
  Body,
  Title,
  Right,
  Form,
  Label,
  Item,
  Input,
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class BarcodeResult extends Component {
  state = { accountNumber: "", loaded: false };
  static navigationOptions = {
    header: null
  };

  // componentWillReceiveProps(nextProps) {
  //   if (
  //     nextProps.result.value !== this.state.accountNumber &&
  //     this.state.loaded === false
  //   ) {
  //     this.setState({ accountNumber, loaded: true });
  //   }
  // }
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

  render() {
    let {
      result,
      imagePath,
      fullImagePath,
      emptyResult,
      currentScanMode,
      SPID
    } = this.props;
    const {
      state: { accountNumber }
    } = this;
    let fullImage = <View />;
    let fullImageText = <View />;
    if (fullImagePath && fullImagePath != "") {
      fullImage = (
        <Image
          style={styles.image}
          resizeMode={"contain"}
          source={{ uri: `file://${fullImagePath}` }}
        />
      );
      fullImageText = <Text style={styles.text}>Full Image:</Text>;
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
          <Left />
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>MOBBILL</Text>
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text>Full Image:</Text>
          {fullImage}
          <Text style={styles.text}>Cutout:</Text>
          <Image
            style={styles.image}
            resizeMode={"contain"}
            source={{ uri: `file://${imagePath}` }}
          />
          <Text>{`SPID ${SPID}`}</Text>
          <Form>
            <Item floatingLabel {...(isNaN(accountNumber) ? "error" : null)}>
              <Label>Account Number</Label>
              <Input
                placeholder="Enter Account Number"
                value={accountNumber}
                onChangeText={accountNumber => this.setState({ accountNumber })}
              />
              {isNaN(accountNumber) && (
                <Icon name="close-circle" style={{ color: "red" }} />
              )}
            </Item>
          </Form>
          {!isNaN(accountNumber) && (
            <AnylineMeterReadScanner
              style={{ flex: 0.2, height: "20%" }}
              SPID={SPID}
              accountNumber={accountNumber}
            />
          )}
        </Content>
        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 300,
    width: Dimensions.get("window").width,
    alignSelf: "stretch"
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
  // text: {
  //   color: "white",
  //   justifyContent: "space-around",
  //   marginTop: 5
  // },
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
  }
});
