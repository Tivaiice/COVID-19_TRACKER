import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("First");
    }, 2000);
  }

  render() {
    return (
      <View style={styles.bgContainer}>
        <Image
          style={styles.pic}
          source={require("../src/images/new-normality.png")}
        />
        <Text style={{ marginTop: 10 }}>COVID-19 TRACKER</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  pic: { width: 100, height: 100 },
});

export default Splash;
