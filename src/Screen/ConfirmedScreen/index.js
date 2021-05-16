import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
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
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{ fontSize: 15, marginTop: 8 }}>A-Z</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text style={{ fontSize: 15, marginTop: 8 }}>Z-A</Text>
          </View>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          {checked === "first" ? (
            <FlatList
              key={datas.ID}
              data={datas.sort((a, b) =>
                a.TotalConfirmed > b.TotalConfirmed ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <Text>Country : {item.Country}</Text>
                  <Text>
                    TotalConfirmed :
                    {item.TotalConfirmed == 0
                      ? "unreported"
                      : item.TotalConfirmed}
                  </Text>
                </View>
              )}
            />
          ) : null}
          {checked === "second" ? (
            <FlatList
              key={datas.ID}
              data={datas.sort((a, b) =>
                a.TotalConfirmed < b.TotalConfirmed ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <Text>Country : {item.Country}</Text>
                  <Text>
                    TotalConfirmed :
                    {item.TotalConfirmed == 0
                      ? "unreported"
                      : item.TotalConfirmed}
                  </Text>
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
    borderWidth: 1,
    borderColor: "#09C600",
    borderRadius: 5,
    margin: 2,
    padding: 2,
  },
  imageHead: {
    flex: 1,
    height: 70,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Confirmed;
