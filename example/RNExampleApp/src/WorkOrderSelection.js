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
  Text
} from "native-base";

export default class WorkOrders extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };

  render() {
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
        <Header>
          <Body>
            <Title>Select Work Order Type</Title>
          </Body>
        </Header>
        <Content>
          <Button full rounded onPress={() => Actions.workorders()}>
            <Text>Meter Reading Orders</Text>
          </Button>
          <Button full rounded>
            <Text>Other Work Orders</Text>
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
  SectionHeaderStyle: {
    backgroundColor: "#CDDC89",
    fontSize: 20,
    padding: 5,
    color: "#fff"
  },

  SectionListItemStyle: {
    flex: 1,
    fontSize: 15,
    width: Dimensions.get("window").width,
    padding: 15,
    color: "#000",
    backgroundColor: "#F5F5F5"
  },
  cardHeaderStyle: {
    backgroundColor: "#c1cfe6",
    height: 10
  },
  pendingStatusStyle: {
    color: "red"
  },
  completedStatusStyle: {
    color: "green"
  }
});
