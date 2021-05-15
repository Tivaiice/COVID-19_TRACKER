import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-navigation";
import { RadioButton } from "react-native-paper";

const Death = ({ navigation, props, datas }) => {
  const [checked, setChecked] = useState("");
  return (
    <View style={styles.bgContainer}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, height: 55 }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("First");
              }}
            >
              <Image
                style={{ width: 35, height: 35, marginTop: 10, marginLeft: 10 }}
                source={require("../../images/previous.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 8, height: 55 }}>
            <Text
              style={{ alignSelf: "center", fontSize: 20, marginVertical: 12 }}
            >
              TotalDeath
            </Text>
          </View>
          <View style={{ flex: 1, height: 55, marginTop: 10, marginRight: 10 }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../images/death.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 12 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              value="first"
              color="#FFE800"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={{ fontSize: 15, marginTop: 8 }}>A-Z</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <RadioButton
              value="second"
              color="#FFE800"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text style={{ fontSize: 15, marginTop: 8 }}>Z-A</Text>
          </View>
        </View>
        <SafeAreaView style={{ flex: 1 }}>
          {checked === "first" ? (
            <FlatList
              data={datas.sort((a, b) =>
                a.TotalDeaths > b.TotalDeaths ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <Text>Country : {item.Country}</Text>
                  <Text>
                    TotalDeaths :
                    {item.TotalDeaths == 0 ? "unreported" : item.TotalDeaths}
                  </Text>
                </View>
              )}
            />
          ) : null}
          {checked === "second" ? (
            <FlatList
              data={datas.sort((a, b) =>
                a.TotalDeaths < b.TotalDeaths ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <Text>Country : {item.Country}</Text>
                  <Text>
                    TotalDeaths :
                    {item.TotalDeaths == 0 ? "unreported" : item.TotalDeaths}
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
    borderColor: "#FFE800",
    borderRadius: 5,
    margin: 2,
    padding: 2,
  },
});

export default Death;
