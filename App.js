import React, { Component } from "react";
import { View, TextInput, Text, Button, Alert, StyleSheet } from "react-native";
export default class HomeActivity extends Component {
  constructor(props) {
    super(props) //This allow to access this.props in Constructor
    this.state = {
      textInput: ''
    }
  }

  buttonClickListener = () => { // arrow function https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    const { TextInputValue } = this.state;
    Alert.alert(TextInputValue);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Please input destination or hotel name
      </Text>
        <TextInput
          style={styles.input}
          onChangeText={TextInputValue => this.setState({ TextInputValue })}
          placeholder="Please input..."
        />
        <View style={[styles.buttonContainer]}>
          <Button
            onPress={this.buttonClickListener}
            title="Search"
            color="#00B0FF"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5e5e5"
    },
    header: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      fontWeight: "bold"
    },
    input: {
      width: "95%",
      borderColor: "silver",
      borderWidth: 1
    },
    buttonContainer: {
      width: "93%",
      margin: 15,
      backgroundColor: "red"
    },
  }
);


