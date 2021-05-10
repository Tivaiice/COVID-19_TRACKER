import * as React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const Home = ({ props, navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <View>
        <Text>HOME PAGE</Text>
        <Button
          title="Next Page"
          color="#FFFFFF"
          onPress={() => {
            navigation.navigate("About");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;
