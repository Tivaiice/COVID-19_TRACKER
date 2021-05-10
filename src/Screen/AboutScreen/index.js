import * as React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const About = ({ props, navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "blue",
      }}
    >
      <View>
        <Text>ABOUT PAGE</Text>
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="Back Page"
          color="#FFFFFF"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default About;
