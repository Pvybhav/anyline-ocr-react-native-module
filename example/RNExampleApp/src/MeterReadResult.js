import React, { Component } from "react";
import { Image, StyleSheet, View, Dimensions, StatusBar, Modal, TouchableHighlight } from "react-native";
import { Actions } from "react-native-router-flux";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Container,
  Header,
  Content,
  Text,
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
  state = { reading: "", loaded: false, modalVisible:false };
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
  handlePhoto = () => {
    Actions.capturePhoto({...this.props});
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    const {
      handleSubmit,
      handleLogout,
      handlePhoto,
      state: { reading },
      props: { imagePath, fullImagePath, SPID, accountNumber }
    } = this;
    let fullImage = <View />;
    if (fullImagePath && fullImagePath != "") {
      fullImage = (
        <Image
          style={styles.fullImageStyle}
          resizeMode={"contain"}
          source={{ uri: `file://${fullImagePath}` }}
        />
      );
      fullImageText = (
        <Text>Full Image:</Text>
      );
    }
    return (
      <Container>
        {this.props.capturestate === true ? <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          >
          <View style={{marginTop: 22}}>
            <View>
            <Image
          style={{width: Dimensions.get("window").width , height: Dimensions.get("window").height - 100}}
          source={{uri: "file://"+ this.props.captureImages[0].uri}}
        />
              <Button 
              full
              rounded
              style={styles.submitButtonStyle}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Close</Text>
              </Button>
            </View>
          </View>
        </Modal>
      </View> : null}
        
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
          <Body>
            <Title>
              <Text style={styles.headerContentStyle}>Meter Read Result</Text>
            </Title>
            <Subtitle>
              <Text style={{ color: "white", fontStyle: "italic" }}>
                Hello, Smith
              </Text>
            </Subtitle>
          </Body>
          <Right>
            <Button transparent onPress={handleLogout}>
              <Icon name="logout" size={30} color="#ffb10a" />
            </Button>
          </Right>
        </Header>
        <Content>
          {fullImageText}
          {fullImage}
          <Text>Cutout:</Text>
          <Image
            style={styles.cutoutImageStyle}
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
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text
                style={{
                  flex: 0.5,
                  textAlign: "center",
                  marginRight: 10,
                  fontWeight: "bold"
                }}
              >
                SPID
              </Text>
              <Text
                style={{ flex: 0.5, textAlign: "left", marginLeft: 10 }}
              >{`${SPID}`}</Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  flex: 0.5,
                  textAlign: "center",
                  marginRight: 10,
                  fontWeight: "bold"
                }}
              >
                Account Number
              </Text>
              <Text
                style={{ flex: 0.5, textAlign: "left", marginLeft: 10 }}
              >{`${accountNumber}`}</Text>
            </View>
          </View>
          <Form>
            <Item >
              <Label>Meter Reading</Label>
              <Input
                value={reading}
                onChangeText={reading => this.setState({ reading })}
                autoFocus
              />
              {isNaN(reading) && (
                <Icon name="close-circle" style={{ color: "red" }} />
              )}
            </Item>
          </Form>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <Button
              full
              rounded
              style={styles.submitButtonStyle}
              onPress={handlePhoto}
            >
              <Text style={styles.submitButtonTextStyle}>Capture Photo</Text>
            </Button>
            {this.props.capturestate === true ? <Button transparent onPress={() => {
            this.setModalVisible(true);
          }}><Text>{this.props.captureImages[0].name}</Text></Button> : null}
            <Button
              full
              rounded
              style={styles.submitButtonStyle}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonTextStyle}>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fullImageStyle: {
    flex: 1,
    height: 300,
    width: Dimensions.get("window").width,
    alignSelf: "stretch"
  },
  cutoutImageStyle: {
    flex: 1,
    height: 200,
    width: Dimensions.get("window").width,
    alignSelf: "stretch"
  },
  imageHeaderTextStyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
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
    fontSize: 20,
    textAlign: "center",
    flexDirection: "row"
  },
  headline: {
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
    fontSize: 15,
    justifyContent: "center"
  },
  scrollContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column"
  },
  buttonStyle: {
    margin: 10
  },
  submitButtonStyle: {
    marginTop: 10,
    marginBottom: 10,
    alignItems: "stretch",
    justifyContent: "center"
  },
  submitButtonTextStyle: {
    margin: 10,
    fontWeight: "bold",
    alignContent: "center",
    color: "white",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center"
  }
});
