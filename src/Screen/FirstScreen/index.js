import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

// const data = [
//   {
//     albumId: 1,
//     id: 44,
//     thumbnailUrl: "https://via.placeholder.com/150/29fe9f",
//     title: "neque eum provident et inventore sed ipsam dignissimos quo",
//     url: "https://via.placeholder.com/600/29fe9f",
//   },
// ];

const First = ({ props, navigation, data, isLoading }) => {
  return (
    <View
      style={{
        marginTop: 50,
        alignItems: "center",
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text>HOME PAGE</Text>
        <View style={{ flex: 1 }}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View
                  style={{
                    borderColor: "#bababa",
                    borderWidth: 0.5,
                    height: 40,
                    width: 300,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={{
                        width: 50,
                      }}
                    >
                      <Image
                        style={{ width: 40, height: 40, borderRadius: 50 }}
                        source={{ uri: item.url }}
                      />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                      <Text
                        style={{
                          width: 200,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>
                    <View style={{ width: 50 }}>
                      <Button
                        title=">"
                        color="#FF0000"
                        onPress={() =>
                          navigation.navigate("Two", {
                            title: item.title,
                            pic: item.url,
                          })
                        }
                      />
                    </View>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default First;
