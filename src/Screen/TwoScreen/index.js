import { Item } from "native-base";
import * as React from "react";
import { Text, StyleSheet, View, Button, Image } from "react-native";

const Two = ({ Title, Pic, props, navigation }) => {
  return (
    <View
      style={{
        marginTop: 50,
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View>
        <Text>Detail PAGE</Text>
        <View style={{ flexDirection: "column" }}>
          <Image style={{ width: 250, height: 100 }} source={{ uri: Pic }} />
          <Text>{Title}</Text>
        </View>
        <Button
          title="Back Page"
          onPress={() => navigation.navigate("First")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Two;
