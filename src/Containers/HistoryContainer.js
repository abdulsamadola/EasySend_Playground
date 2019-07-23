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
import { Ionicons } from "@expo/vector-icons";

export default class HistoryContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: "History",
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    tabBarIcon: ({ tintColor }) => (
      <Ionicons name="ios-timer" size={25} color={tintColor} />
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
