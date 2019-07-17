import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Icon,
  Picker,
  Form,
  Body,
  Left,
  Button,
  Right,
  Text,
  Title,
  Subtitle
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";

export default class SelectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: null
    };
  }
  // Actions.workorders()
  render() {
    const {
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
              <Text style={styles.headerContentStyle}>Work Orders</Text>
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
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
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
        </Content>
      </Container>
    );
  }
}
