import React from "react";
import { StyleSheet } from "react-native";
import Tabs from "./src/";

export default function App() {
  return <Tabs />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
