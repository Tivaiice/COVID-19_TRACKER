import React from "react";
import { View, StyleSheet, Constants } from "react-native";
import StackNavigation from "./Navigation";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 5 : StatusBar.currentHeight;
class App extends React.Component {
  render() {
    return (
      <View style={styles.statusBar}>
        <StackNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    backgroundColor: "#003567",
    height: STATUSBAR_HEIGHT,
  },
});
export default App;
