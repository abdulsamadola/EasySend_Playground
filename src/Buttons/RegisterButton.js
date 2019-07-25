import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class RegisterButton extends Component {
  render() {
    let { backgroundColor } = this.props;
    return (
      <TouchableOpacity style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 42
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 100
  }
});
