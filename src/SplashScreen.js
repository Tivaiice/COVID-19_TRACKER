import React from "react";
import { View, Text } from "react-native";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Home");
    }, 2000);
  }

  render() {
    return (
      <View
        style={{ flex: 1, alignItems: "center", backgroundColor: "tomato" }}
      >
        <Text>Loading</Text>
      </View>
    );
  }
}

export default Splash;
