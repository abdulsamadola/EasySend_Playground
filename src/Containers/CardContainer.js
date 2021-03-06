import React from "react";
import { View, Alert, ActivityIndicator, StyleSheet, Text } from "react-native";
import colors from "../Theme/theme";
import { FontAwesome } from "@expo/vector-icons";

export default class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  Loading = () => {
    Alert.alert("I have nothing to display!");
  };
  componentWillMount() {
    setTimeout(() => {
      this.Loading();
    }, 3000);
  }
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
    let content = !this.state.isLoading ? (
      <View style={styles.container} />
    ) : (
      <View
        style={[
          styles.container,
          { alignItems: "center", justifyContent: "center" }
        ]}
      >
        <ActivityIndicator color={colors.blue} />
        <Text style={{ color: colors.black }}>Please wait...</Text>
      </View>
    );
    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: "center"
  }
});
