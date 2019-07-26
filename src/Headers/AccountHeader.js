import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback
} from "react-native";
import colors from "../Theme/theme";

export default class AccountHeader extends Component {
  _alertIconRight = () => {
    Alert.alert("Drawer will slide-out!");
  };
  _alertIconLeft = () => {
    Alert.alert("I will change to search box!");
  };
  render() {
    let { text, iconRight, iconLeft } = this.props;
    const callHere = iconRight ? (
      <TouchableWithoutFeedback onPress={this._alertIconRight}>
        {iconRight}
      </TouchableWithoutFeedback>
    ) : null;
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <View style={styles.icon2}>{callHere}</View>
          <Text style={styles.headerText}>{text}</Text>
          <View style={styles.icon}>
            <TouchableWithoutFeedback onPress={this._alertIconLeft}>
              {iconLeft}
            </TouchableWithoutFeedback>
          </View>
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
