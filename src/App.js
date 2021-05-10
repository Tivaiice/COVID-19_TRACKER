import React from "react";
import { View } from "react-native";
import StackNavigation from "./Navigation";

class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StackNavigation />
      </View>
    );
  }
}

export default App;
