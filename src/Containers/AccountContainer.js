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
import { FontAwesome } from "@expo/vector-icons";

export default class AccountContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Accounts",
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="user-o" size={25} color={tintColor} />
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
        <AccountHeader
          text="Accounts"
          iconLeft={
            <FontAwesome name="search" size={18} color={colors.black} />
          }
        />
        <RoundButton
          rightTopText="Euro"
          rightBottomText="Eur"
          leftTopText="200.00"
          leftBottomText="Main Account"
          backgroundColor={colors.blue01}
          color={colors.primary}
        />
        <CentreButton backgroundColor={colors.green} />
        <RoundButton
          rightTopText="USD"
          rightBottomText="US Dollar"
          leftTopText="0.00"
          leftBottomText="0.00 EUR"
          backgroundColor={colors.white}
          color={colors.blue01}
        />
        <View style={{ height: "37%" }} />
        <RegisterButton backgroundColor={colors.blue01} />
        <BottomButton
          rightTopText="Total"
          rightBottomText="Exceptional Payment"
          leftTopText="200.00"
          rightColor={colors.black}
          leftColor={colors.blue01}
          rightIcon={
            <FontAwesome
              name="heart-o"
              size={10}
              style={{ paddingRight: 2, paddingTop: 3 }}
            />
          }
          backgroundColor={colors.white}
        />
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
