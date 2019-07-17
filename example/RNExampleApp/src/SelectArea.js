import React, { Component } from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Content,
  Picker,
  Form,
  Body,
  Left,
  Button,
  Right,
  Text,
  Title,
  Subtitle,
  Icon as NativeBaseIcon,
  Separator
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import { Actions } from "react-native-router-flux";

export default class SelectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: null
    };
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
      state: { selectedArea }
    } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title>
              <Text style={styles.headerContentStyle}>Select Area</Text>
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
        // contentContainerStyle={{
        // flex: 1,
        // flexDirection: "column",
        //   justifyContent: "center",
        //   alignItems: "stretch"
        // }}
        >
          <Separator bordered style={{ height: 50 }}>
            <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
              Select Area
            </Text>
          </Separator>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<NativeBaseIcon name="arrow-down" />}
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={selectedArea}
              onValueChange={value => this.setState({ selectedArea: value })}
              placeholder="Select Your Area"
            >
              <Picker.Item label="Al Ghubra1" value="Al_Ghubra1" />
              <Picker.Item label="Al Ghubra2" value="Al_Ghubra2" />
              <Picker.Item label="Al Khuwair33" value="Al_Khuwair33" />
              <Picker.Item label="Al KhuwairSouth" value="Al_KhuwairSouth" />
            </Picker>
          </Form>
          <Button full rounded onPress={() => Actions.workorders()}>
            <Text style={styles.loginTextStyle}>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  submitTextStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});
