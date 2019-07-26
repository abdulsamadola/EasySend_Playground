import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator
} from "react-native";
import colors from "../Theme/theme";
import AccountHeader from "../Headers/AccountHeader";
import SquareButton from "../Buttons/SquareButton";
import BottomButton from "../Buttons/BottomButton";
import RegisterButton from "../Buttons/RegisterButton";
import { FontAwesome } from "@expo/vector-icons";

export default class HistoryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  Loading = () => {
    this.setState({
      isLoading: false
    });
  };
  componentWillMount() {
    setTimeout(() => {
      this.Loading();
    }, 3000);
  }
  static navigationOptions = {
    tabBarLabel: "History",
    tabBarOptions: {
      activeTintColor: colors.blue
    },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="history" size={25} color={tintColor} />
    ),
    headerTitleStyle: {
      //color: "white",
      fontSize: 20,
      fontWeight: "bold"
    }
  };

  render() {
    let content = !this.state.isLoading ? (
      <View style={styles.container}>
        <AccountHeader
          text="History"
          iconRight={<FontAwesome name="bars" size={18} color={colors.black} />}
          iconLeft={
            <FontAwesome name="search" size={18} color={colors.black} />
          }
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              paddingBottom: 10
              //paddingTop: 5
            }}
          >
            Select your currency account
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            right: 10
          }}
        >
          <SquareButton
            rightTopText="$200.00"
            rightBottomText="US Dollar"
            backgroundColor={colors.blue01}
            color={colors.primary}
          />
          <SquareButton
            rightTopText="E0.00"
            rightBottomText="Euro"
            backgroundColor={colors.white}
            color={colors.blue01}
          />
        </View>
        <View style={{ height: "25%" }} />
        <RegisterButton backgroundColor={colors.blue01} />
        <BottomButton
          rightTopText="Balance"
          leftTopText="200.00 USD"
          rightColor={colors.black}
          leftColor={colors.blue01}
          backgroundColor={colors.white}
        />
      </View>
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
    return <View style={{ flex: 1 }}>{content}</View>;
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    padding: 10
  }
});
