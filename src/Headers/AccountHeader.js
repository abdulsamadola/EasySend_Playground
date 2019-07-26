import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../Theme/theme";

export default class AccountHeader extends Component {
  render() {
    let { text, iconRight, iconLeft } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.icon2}>{iconRight}</View>
          <Text style={styles.headerText}>{text}</Text>
          <View style={styles.icon}>{iconLeft}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    // height: "2%"
    //padding: 15
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  icon: {
    left: 120
  },
  icon2: {
    right: 120
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.black
  }
});
