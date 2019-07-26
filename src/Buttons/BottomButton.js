import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../Theme/theme";

export default class BottomButton extends Component {
  render() {
    let {
      backgroundColor,
      rightTopText,
      rightBottomText,
      leftTopText,
      leftBottomText,
      rightColor,
      leftColor,
      rightIcon
    } = this.props;

    const paddingTop = rightBottomText ? 0 : 10;
    return (
      <View style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]}>
          <View>
            <Text style={[styles.TopText, { color: rightColor, paddingTop }]}>
              {rightTopText}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              {rightIcon}
              <Text style={[styles.BottomText, { color: rightColor }]}>
                {rightBottomText}
              </Text>
            </View>
          </View>
          <View>
            <Text style={[styles.TopText, { color: leftColor, paddingTop }]}>
              {leftTopText}
            </Text>
            <Text style={[styles.BottomText, { color: leftColor }]}>
              {leftBottomText}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "12%",
    marginTop: 10
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8
  },
  TopText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  BottomText: {
    fontSize: 12
    //paddingTop: 5
  }
});
