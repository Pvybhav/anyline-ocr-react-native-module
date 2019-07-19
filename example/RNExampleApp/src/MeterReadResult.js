import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
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
  Item,
  Label,
  Input,
  Subtitle
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

export default class MeterReadResult extends Component {
  state = { reading: "", loaded: false };
  static navigationOptions = {
    header: null
  };
  static getDerivedStateFromProps(props, state) {
    const {
      imagePath,
      fullImagePath,
      currentScanMode,
      SPID,
      reading,
      accountNumber
    } = props;
    if (state.reading !== props.reading && state.loaded === false) {
      return {
        imagePath,
        fullImagePath,
        currentScanMode,
        SPID,
        reading,
        accountNumber,
        loaded: true
      };
    }
    return null;
  }
  handleSubmit = () => {
    Actions.acknowledgement();
  };
  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };
  render() {
    const {
      handleSubmit,
      handleLogout,
      state: { reading },
      props: { imagePath, fullImagePath, SPID, accountNumber }
    } = this;
    let fullImage = <View />;
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
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={styles.headerContentStyle}>Meter Read Result</Text>
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
          <Text style={styles.text}>Cutout:</Text>
          <Image
            style={styles.image}
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
          <Text>{`Account Number ${accountNumber}`}</Text>
          </View>
          <Form>
            <Item floatingLabel {...(isNaN(reading) ? "error" : null)}>
              <Label>Meter Reading</Label>
              <Input
                placeholder="Enter Meter Reading"
                value={reading}
                onChangeText={reading => this.setState({ reading })}
                autoFocus
              />
              {isNaN(reading) && (
                <Icon name="close-circle" style={{ color: "red" }} />
              )}
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button full onPress={handleSubmit}>
              <Text>Submit</Text>
            </Button>
          </FooterTab>
        </Footer>
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
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
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
