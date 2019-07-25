import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class AccountHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Accounts</Text>
          <View style={styles.icon}>
            <FontAwesome name="search" size={18} color={colors.black} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    height: "15%",
    paddingTop: 25,
    paddingBottom: 25
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "center"
  },
  icon: {
    left: 125
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.black
  }
});
