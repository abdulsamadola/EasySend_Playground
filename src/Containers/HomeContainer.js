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
import { FontAwesome } from "@expo/vector-icons";

export default class AccountContainer extends React.Component {
  static navigationOptions = {
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    tabBarLabel: "Home",
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="navicon" size={25} color={tintColor} />
    ),

    headerTitleStyle: {
      //color: "blue",
      fontSize: 20,
      fontWeight: "bold"
    }
  };

  render() {
    return <View style={styles.container} />;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center"
  }
});
