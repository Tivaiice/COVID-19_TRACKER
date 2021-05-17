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
        <View style={styles.styFlex1}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.viewNavBar}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("First");
                }}
              >
                <Image
                  style={styles.styImgBack}
                  source={require("../../images/back.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewTxtNavBar}>
              <Text style={styles.txtNavBar}>TotalConfirmed</Text>
            </View>
            <View style={styles.viewImgNavBar}>
              <Image
                style={styles.styImgCovid}
                source={require("../../images/covidd199.png")}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={{ flex: 12 }}>
        <View style={styles.viewBtn}>
          <View style={styles.viewRed}>
            <RadioButton
              value="first"
              color="#d61d1d"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />
            <Text style={styles.txtHigh}>Highest</Text>
          </View>
          <View style={styles.viewGreen}>
            <RadioButton
              value="second"
              color="#73dc32"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />
            <Text style={styles.txtLow}>Lowest</Text>
          </View>
        </View>
        <SafeAreaView style={styles.styFlex1}>
          {checked === "first" ? (
            <FlatList
              data={datas.sort((a, b) =>
                a.TotalConfirmed > b.TotalConfirmed ? 1 : -1
              )}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item, id }) => (
                <View key={id} style={styles.boxList}>
                  <View style={styles.viewListLeft}>
                    <Text style={styles.txtBold}>Country</Text>
                    <Text style={styles.txtBold}>TotalConfirmed </Text>
                  </View>
                  <View style={styles.viewListRight}>
                    <Text style={styles.font13}>{item.Country}</Text>
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
                  <View style={styles.viewListLeft}>
                    <Text style={styles.txtBold}>Country</Text>
                    <Text style={styles.txtBold}>TotalConfirmed </Text>
                  </View>
                  <View style={styles.viewListRight}>
                    <Text style={styles.font13}>{item.Country}</Text>
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
  styFlex1: {
    flex: 1,
  },
  viewNavBar: {
    flex: 1,
    height: 55,
  },
  styImgBack: {
    width: 25,
    height: 25,
    marginVertical: 20,
    marginLeft: 10,
  },
  viewTxtNavBar: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtNavBar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  viewImgNavBar: {
    flex: 1,
    height: 55,
    marginTop: 10,
    marginRight: 10,
  },
  styImgCovid: {
    width: 40,
    height: 40,
    marginVertical: 2,
  },
  viewBtn: {
    height: 35,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: Platform.OS === "ios" ? 20 : 25,
    marginBottom: 10,
  },
  viewRed: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderColor: "#d61d1d",
  },
  txtHigh: {
    fontSize: 13,
    paddingHorizontal: 5,
    color: "#d61d1d",
  },
  viewGreen: {
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderColor: "#73dc32",
  },
  txtLow: {
    fontSize: 13,
    paddingHorizontal: 5,
    color: "#73dc32",
  },
  txtBold: {
    fontWeight: "bold",
  },
  viewListLeft: {
    paddingLeft: 15,
    paddingVertical: 10,
  },
  viewListRight: {
    paddingLeft: 5,
    paddingVertical: 10,
  },
  font13: {
    fontSize: 13,
  },
});

export default Confirmed;
