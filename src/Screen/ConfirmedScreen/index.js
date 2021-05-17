import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { RadioButton } from "react-native-paper";

const Confirmed = ({ navigation, datas }) => {
  const [checked, setChecked] = useState("");
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        source={require("../../images/head2.png")}
        style={styles.imageHead}
      >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, height: 55 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("First");
                }}
              >
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginVertical: 20,
                    marginLeft: 10,
                  }}
                  source={require("../../images/back.png")}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flex: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                }}
              >
                TotalConfirmed
              </Text>
            </View>
            <View
              style={{ flex: 1, height: 55, marginTop: 10, marginRight: 10 }}
            >
              <Image
                style={{ width: 40, height: 40, marginVertical: 2 }}
                source={require("../../images/covidd199.png")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 12 }}>
        <View
          style={{
            height: 35,
            flexDirection: "row",
            justifyContent: "flex-end",
            marginTop: Platform.OS === "ios" ? 20 : 25,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
              borderColor: "#d61d1d",
            }}
          >
            <RadioButton
              value="first"
              color="#d61d1d"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Image
              source={require("../../images/up.png")}
              style={{
                width: 10,
                height: 20,
              }}
            />
            <Text
              style={{ fontSize: 13, paddingHorizontal: 5, color: "#d61d1d" }}
            >
              Highest
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 5,
              borderColor: "#73dc32",
            }}
          >
            <RadioButton
              value="second"
              color="#73dc32"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Image
              source={require("../../images/down.png")}
              style={{
                width: 10,
                height: 20,
                marginVertical: 3,
                marginRight: 5,
              }}
            />
            <Text
              style={{ fontSize: 13, paddingHorizontal: 5, color: "#73dc32" }}
            >
              Lowest
            </Text>
          </View>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          {checked === "first" ? (
            <FlatList
              data={datas.sort((a, b) =>
                a.TotalConfirmed > b.TotalConfirmed ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <View style={{ paddingLeft: 15, paddingVertical: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>Country</Text>
                    <Text style={{ fontWeight: "bold" }}>TotalConfirmed </Text>
                  </View>
                  <View style={{ paddingLeft: 5, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 13 }}>{item.Country}</Text>
                    <Text>
                      {item.TotalConfirmed == 0
                        ? "unreported"
                        : item.TotalConfirmed}
                    </Text>
                  </View>
                </View>
              )}
            />
          ) : null}
          {checked === "second" ? (
            <FlatList
              data={datas.sort((a, b) =>
                a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <View style={{ paddingLeft: 15, paddingVertical: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>Country</Text>
                    <Text style={{ fontWeight: "bold" }}>TotalConfirmed </Text>
                  </View>
                  <View style={{ paddingLeft: 5, paddingVertical: 10 }}>
                    <Text style={{ fontSize: 13 }}>{item.Country}</Text>
                    <Text>
                      {item.TotalConfirmed == 0
                        ? "unreported"
                        : item.TotalConfirmed}
                    </Text>
                  </View>
                </View>
              )}
            />
          ) : null}
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  boxList: {
    backgroundColor: "#d7d7d7",
    borderBottomWidth: 0,
    marginHorizontal: 20,
    flexDirection: "row",
    marginVertical: 2,
  },
  imageHead: {
    flex: 1,
    height: 70,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Confirmed;
