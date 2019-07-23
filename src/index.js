import React from "react";

import Account from "./Containers/AccountContainer";
import History from "./Containers/HistoryContainer";
import Home from "./Containers/HomeContainer";
import Card from "./Containers/CardContainer";
import colors from "./Theme/theme";

import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

const AccountNav = createStackNavigator(
  {
    Account: { screen: Account }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.white,
        color: colors.primary
      },
      headerTintColor: "black"
    }
  }
);
const Tabs = createBottomTabNavigator({
  Account: { screen: Account },
  History: { screen: History },
  Card: { screen: Card },
  Home: { screen: Home }
});
const AppContainer = createAppContainer(Tabs, AccountNav);

export default AppContainer;
