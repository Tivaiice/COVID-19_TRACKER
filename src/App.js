import React from "react";
import { View, StyleSheet } from "react-native";
import StackNavigation from "./Navigation";
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
    backgroundColor: "#003160",
  },
});
export default App;
