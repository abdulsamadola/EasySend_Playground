import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class RegisterButton extends Component {
  _alert = () => {
    Alert.alert("Registration form modal will pop-up!");
  };
  render() {
    let { backgroundColor } = this.props;
    return (
      <TouchableOpacity onPress={this._alert} style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]}>
          <FontAwesome
            name="plus"
            size={18}
            style={{ right: 85 }}
            color={colors.primary}
          />
          <Text
            style={{ color: colors.primary, fontSize: 14, fontWeight: "600" }}
          >
            Open New Account
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 40
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    padding: 10
  }
});
