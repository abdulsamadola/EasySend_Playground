import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import colors from "../Theme/theme";
import AccountHeader from "../Headers/AccountHeader";
import RoundButton from "../Buttons/RoundButton";
import CentreButton from "../Buttons/CentreButton";
import BottomButton from "../Buttons/BottomButton";
import RegisterButton from "../Buttons/RegisterButton";
import { Ionicons } from "@expo/vector-icons";

export default class AccountContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Accounts",
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-person" size={25} color={tintColor} />
    ),
    headerTitleStyle: {
      //color: "white",
      fontSize: 20,
      fontWeight: "bold"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <AccountHeader />
        <RoundButton backgroundColor={colors.blue01} />
        <CentreButton backgroundColor={colors.green} />
        <RoundButton backgroundColor={colors.white} />
        <View style={{ height: "33%" }} />
        <RegisterButton backgroundColor={colors.blue01} />
        <BottomButton backgroundColor={colors.white} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 10
  }
});
