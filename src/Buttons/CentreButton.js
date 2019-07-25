import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class CentreButton extends Component {
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
    //position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: "2%",
    zIndex: 999
  },
  buttonWrapper: {
    flex: 1,
    position: "absolute",
    height: 30,
    width: 30,
    borderRadius: 100,
    zIndex: 999
  }
});
