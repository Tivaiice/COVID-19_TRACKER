import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
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
                Details
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
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <Image
              source={randomImage}
              style={{
                width: 150,
                height: 150,
                alignSelf: "center",
                marginTop: 50,
              }}
            />
          </View>
          <View
            style={{
              flex: 4,
            }}
          >
            <View
              style={{
                backgroundColor: "#d7d7d7",
                padding: 20,
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, paddingLeft: 50 }}>
                <Text style={styles.txtdetails}>Country </Text>
                <Text style={styles.txtdetails}>CountryCode</Text>
                <Text style={styles.txtdetails}>Date</Text>
                <Text style={styles.txtdetails}>NewConfirmed</Text>
                <Text style={styles.txtdetails}>NewDeaths</Text>
                <Text style={styles.txtdetails}>NewRecovered</Text>
                <Text style={styles.txtdetails}>Slug </Text>
                <Text style={styles.txtdetails}>TotalConfirmed</Text>
                <Text style={styles.txtdetails}>TotalDeaths </Text>
                <Text style={styles.txtdetails}>TotalRecovered </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>{detail.Country}</Text>
                <Text>{detail.CountryCode}</Text>
                <Text>{moment(detail.Date).format("YYYY/MM/DD HH:mm:ss")}</Text>
                <Text>
                  {detail.NewConfirmed == 0
                    ? "unreported"
                    : detail.NewConfirmed}
                </Text>
                <Text>
                  {detail.NewDeaths == 0 ? "unreported" : detail.NewDeaths}
                </Text>
                <Text>
                  {detail.NewRecovered == 0
                    ? "unreported"
                    : detail.NewRecovered}
                </Text>
                <Text>{detail.Slug}</Text>
                <Text>{detail.TotalConfirmed}</Text>
                <Text>{detail.TotalDeaths}</Text>
                <Text>{detail.TotalRecovered}</Text>
              </View>
            </View>
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
  imageHead: {
    flex: 1,
    height: 70,
    resizeMode: "cover",
    justifyContent: "center",
  },
  txtdetails: {
    fontWeight: "bold",
  },
});

export default ShowDetail;
