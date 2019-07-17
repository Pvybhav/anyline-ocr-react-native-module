import React, { Component } from "react";
import { Container, Header, Content, Spinner } from "native-base";
export default class LoadingSpinner extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Spinner color="green" />
        </Content>
      </Container>
    );
  }
}
