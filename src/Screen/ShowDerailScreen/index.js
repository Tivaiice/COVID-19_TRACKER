import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-navigation";

const ShowDetail = ({ navigation, detail }) => {
  const moment = require("moment");
  let arrPic = [
    require("../../images/customer.png"),
    require("../../images/new-normality.png"),
    require("../../images/rehabilitation.png"),
    require("../../images/safety-suit.png"),
    require("../../images/safety-suit2.png"),
    require("../../images/healthcare-device.png"),
    require("../../images/no-virus.png"),
    require("../../images/soap.png"),
  ];
  const randomImage = arrPic[Math.floor(Math.random() * arrPic.length)];

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
              Deatils
            </Text>
          </View>
          <View style={{ flex: 1, height: 55, marginTop: 10, marginRight: 10 }}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../../images/rehabilitation.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 12 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={randomImage}
              style={{ width: 150, height: 150, alignSelf: "center" }}
            />
          </View>
          <View
            style={{
              flex: 3,
              alignItems: "stretch",
              marginTop: 20,
              marginLeft: 100,
            }}
          >
            <Text>Country : {detail.Country}</Text>
            <Text>CountryCode : {detail.CountryCode}</Text>
            <Text>
              Date :{moment(detail.Date).format(" YYYY/MM/DD HH:mm:ss")}
            </Text>
            <Text>
              NewConfirmed :{" "}
              {detail.NewConfirmed == 0 ? "unreported" : detail.NewConfirmed}
            </Text>
            <Text>
              NewDeaths :{" "}
              {detail.NewDeaths == 0 ? "unreported" : detail.NewDeaths}
            </Text>
            <Text>
              NewRecovered :{" "}
              {detail.NewRecovered == 0 ? "unreported" : detail.NewRecovered}
            </Text>
            <Text>Slug : {detail.Slug}</Text>
            <Text>TotalConfirmed : {detail.TotalConfirmed}</Text>
            <Text>TotalDeaths : {detail.TotalDeaths}</Text>
            <Text>TotalRecovered : {detail.TotalRecovered}</Text>
          </View>
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
    borderColor: "#00FFCD",
    borderRadius: 5,
    margin: 2,
    padding: 2,
  },
});

export default ShowDetail;
