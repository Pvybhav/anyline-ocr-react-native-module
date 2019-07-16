import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class SelectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedArea: null
    };
  }

  render() {
    const {
      state: { selectedArea }
    } = this;
    return (
      <Container>
        <Header />
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
