import React from "react";
import { StyleSheet, View } from "react-native";
import Tabs from "./src/";
import colors from "./src/Theme/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  }
});
