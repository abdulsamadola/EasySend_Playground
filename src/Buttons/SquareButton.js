import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SquareButton extends Component {
  render() {
    let {
      backgroundColor,
      rightTopText,
      rightBottomText,

      color
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={[styles.buttonWrapper, { backgroundColor }]}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={[styles.TopText, { color }]}>{rightTopText}</Text>
            <Text style={[styles.BottomText, { color }]}>
              {rightBottomText}
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
    height: 145,
    width: "45%"
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 8
  },
  TopText: {
    fontSize: 18,
    fontWeight: "400",
    paddingBottom: 25,
    fontWeight: "bold"
  },
  BottomText: {
    fontSize: 14,
    paddingTop: 5,
    fontWeight: "400"
  }
});
