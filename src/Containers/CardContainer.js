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

export default class CardContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: "Card",
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="credit-card" size={25} color={tintColor} />
    ),
    headerTitleStyle: {
      //color: "white",
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
