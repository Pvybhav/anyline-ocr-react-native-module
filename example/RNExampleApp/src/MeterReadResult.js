import React, { Component } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  StatusBar
} from "react-native";
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
  Icon
} from "native-base";
import { Actions } from "react-native-router-flux";

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
  render() {
    const {
      handleSubmit,
      state: { reading },
      props: {
        imagePath,
        fullImagePath,
        // emptyResult,
        // currentScanMode,
        SPID,
        accountNumber
      }
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
          <Text>{`Account Number ${accountNumber}`}</Text>
          <Form>
            <Item floatingLabel {...(isNaN(reading) ? "error" : null)}>
              <Label>Meter Reading</Label>
              <Input
                placeholder="Enter Meter Reading"
                value={reading}
                onChangeText={reading => this.setState({ reading })}
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
