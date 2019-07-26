import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class CentreButton extends Component {
  _alert = () => {
    Alert.alert("Transition that will swap both elements will occur!");
  };
  render() {
    let { backgroundColor } = this.props;
    return (
      <TouchableOpacity onPress={this._alert} style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]}>
          <FontAwesome
            name="long-arrow-down"
            size={12}
            style={{ marginRight: 3, color: colors.primary }}
          />
          <FontAwesome
            name="long-arrow-up"
            size={12}
            style={{ color: colors.primary }}
          />
        </View>
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
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 8
  }
});
