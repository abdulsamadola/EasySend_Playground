import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class RoundButton extends Component {
  render() {
    let { backgroundColor } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "13%"
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 4,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5
  }
});
