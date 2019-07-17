import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  StatusBar,
  SectionList,
  Alert,
  Dimensions
} from "react-native";
// import Icon from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/AntDesign";

import { Actions } from "react-native-router-flux";

import {
  Container,
  Header,
  Left,
  Content,
  Body,
  Right,
  Button,
  Title,
  Subtitle,
  Text
} from "native-base";

export default class WorkOrders extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };
  handleLogout = async () => {
    await AsyncStorage.removeItem("isUserLogin");
    Actions.login();
  };
  render() {
    const { handleLogout } = this;
    return (
      <Container
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <StatusBar
          backgroundColor={styles.container.backgroundColor}
          barStyle="default"
          animated
          hidden={false}
          networkActivityIndicatorVisible={false}
          translucent={false}
        />
        <Header noLeft>
          {/* <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="rocket" size={30} color="#900" />
            </Button>
          </Left> */}
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={styles.headerContentStyle}>MOBBILL</Text>
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
        <Content contentContainerStyle={styles.contentContainerStyle}>
          <Button
            full
            rounded
            onPress={() => Actions.workorders()}
            style={styles.buttonStyle}
          >
            <Text style={styles.buttonTextStyle}>Meter Reading Orders</Text>
          </Button>
          <Button full rounded style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Other Work Orders</Text>
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
    width: "100%",
    alignItems: "center",
    backgroundColor: "#338779"
  },
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
    margin: 10
  },
  buttonTextStyle: {
    fontWeight: "bold"
  }
});
