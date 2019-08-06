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
import NativeBaseButton from "../components/NativeBaseButton";

export default class SelectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfAreas: [
        "Al_Ghubra1",
        "Al_Ghubra2",
        "Al_Khuwair33",
        "Al_KhuwairSouth"
      ],
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

  handleSelectedArea = () => Actions.workorders();

  hanleBackButtonClick = () => Actions.pop();
  render() {
    const {
      hanleBackButtonClick,
      handleLogout,
      handleSelectedArea,
      state: { listOfAreas, selectedArea }
    } = this;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={hanleBackButtonClick}>
              <Icon name="back" size={30} color="#66cc41" />
            </Button>
          </Left>
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>Select Area</Text>
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
        <Content>
          <Separator bordered style={styles.contentSeparatorStyle}>
            <Text style={styles.contentSeparatorTextStyle}>Select Area</Text>
          </Separator>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<NativeBaseIcon name="arrow-down" />}
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={selectedArea}
              onValueChange={selectedArea => this.setState({ selectedArea })}
              placeholder="Select Your Area"
            >
              {listOfAreas.map(area => (
                <Picker.Item label={`  ${area}`} value={area} />
              ))}
            </Picker>
          </Form>
          <NativeBaseButton
            full
            rounded
            onPress={handleSelectedArea}
            buttonText="SUBMIT"
            style={styles.buttonStyle}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  subtitleStyle: { color: "white", fontStyle: "italic" },
  contentSeparatorStyle: { height: 50 },
  contentSeparatorTextStyle: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  headerContentStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  },
  buttonStyle: {
    margin: 10
  }
});
