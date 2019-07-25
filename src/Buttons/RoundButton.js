import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class RoundButton extends Component {
  render() {
    let {
      backgroundColor,
      rightTopText,
      rightBottomText,
      leftTopText,
      leftBottomText,
      color
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]}>
          <View>
            <Text style={[styles.TopText, { color }]}>{rightTopText}</Text>
            <Text style={[styles.BottomText, { color }]}>
              {rightBottomText}
            </Text>
          </View>
          <View>
            <Text style={[styles.TopText, { color }]}>{leftTopText}</Text>
            <Text style={[styles.BottomText, { color }]}>{leftBottomText}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "12%"
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 4,
    shadowColor: "black",
    shadowOpacity: 0.8,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8
  },
  TopText: {
    fontSize: 16,
    fontWeight: "400"
  },
  BottomText: {
    fontSize: 12,
    paddingTop: 5
  }
});
