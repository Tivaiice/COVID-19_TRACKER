import React, { useState } from "react";
import {
  Text,
  Button,
  StyleSheet,
  View,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";

const First = ({ datas, dataTotal, dateUpdate, isLoading, navigation }) => {
  const moment = require("moment");

  const [textSearch, setTextSearch] = useState("");

  return (
    <View style={styles.firstContainer}>
      <View style={styles.styFlex1}>
        <View style={{ backgroundColor: "#003567" }}>
          <Text style={styles.stytxt}>COVID-19 TRACKER</Text>
        </View>
        <View style={styles.styFlex1Main}>
          {isLoading ? (
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <ActivityIndicator size="large" color="#FF0000" />
            </View>
          ) : (
            <View style={styles.totalContainer}>
              <View style={styles.boxTotal}>
                <Text style={styles.dataTotal}>TotalConfirmed</Text>
                <View
                  style={{
                    borderRadius: 5,
                    paddingVertical: 15,
                    paddingHorizontal: 18,
                    backgroundColor: "#ed7d75",
                  }}
                >
                  <Text style={styles.dataTotal}>
                    {dataTotal.TotalConfirmed}
                  </Text>
                </View>
              </View>
              <View style={styles.boxTotal}>
                <Text style={styles.dataTotal}>TotalRecovered</Text>
                <View
                  style={{
                    borderRadius: 5,
                    paddingVertical: 15,
                    paddingHorizontal: 18,
                    backgroundColor: "#e04e36",
                  }}
                >
                  <Text style={styles.dataTotal}>
                    {dataTotal.TotalRecovered}
                  </Text>
                </View>
              </View>
              <View style={styles.boxTotal}>
                <Text style={styles.dataTotal}>TotalDeaths</Text>
                <View
                  style={{
                    borderRadius: 5,
                    paddingVertical: 15,
                    paddingHorizontal: 18,
                    backgroundColor: "#98352b",
                  }}
                >
                  <Text style={styles.dataTotal}>{dataTotal.TotalDeaths}</Text>
                </View>
              </View>
            </View>
          )}
        </View>
        <View style={styles.styFlex5}>
          <View style={styles.styFlex02}>
            <Text style={styles.txtInfor}>
              Infomation update on :
              {moment(dateUpdate).format("YYYY/MM/DD HH:mm:ss")}
            </Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={styles.btnTotal}
                onPress={() => {
                  navigation.navigate("Confirmed", {
                    datas: datas,
                  });
                }}
              >
                <Text>TotalConfirmed</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnTotal}
                onPress={() => {
                  navigation.navigate("Recoverd", {
                    datas: datas,
                  });
                }}
              >
                <Text>TotalRecoverd</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnTotal}
                onPress={() => {
                  navigation.navigate("Death", {
                    datas: datas,
                  });
                }}
              >
                <Text>TotalDeath</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.boxInput}>
              <TextInput
                label="Search Country"
                mode="outlined"
                selectionColor="#003567"
                style={{ fontSize: 15, height: 40 }}
                value={textSearch}
                onChangeText={(textSearch) => setTextSearch(textSearch)}
              />
            </View>
          </View>
          <View style={styles.styFlex1List}>
            <SafeAreaView style={{ margin: 10 }}>
              <View style={{ marginHorizontal: 10 }}>
                <ScrollView>
                  {datas
                    .filter((data) =>
                      data.Country.toLowerCase().includes(
                        textSearch.toLowerCase()
                      )
                    )
                    .map((item) => (
                      <TouchableOpacity
                        key={item.ID}
                        onPress={() => {
                          navigation.navigate("ShowDetail", { detail: item });
                        }}
                      >
                        <View
                          style={{
                            marginVertical: 2,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
                            backgroundColor: "#d7d7d7",
                          }}
                        >
                          <Text>Country : {item.Country}</Text>
                          <Text>
                            NewConfirmed :
                            {item.NewConfirmed == 0
                              ? "unreported"
                              : item.NewConfirmed}
                          </Text>
                          <Text>
                            NewDeaths :
                            {item.NewDeaths == 0
                              ? "unreported"
                              : item.NewDeaths}
                          </Text>
                          <Text>
                            NewRecovered :{" "}
                            {item.NewRecovered == 0
                              ? "unreported"
                              : item.NewRecovered}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </SafeAreaView>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  stytxt: {
    alignSelf: "center",
    fontSize: 25,
    color: "#FFFFFF",
  },
  dataTotal: {
    color: "#FFFFFF",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  btnTotal: {
    borderWidth: 1,
    padding: 5,
    borderColor: "#808080",
    borderRadius: 5,
  },
  boxTotal: {
    width: 110,
    height: 100,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  boxList: {
    borderWidth: 1,
    borderColor: "#FF0000",
    borderRadius: 5,
    margin: 2,
    padding: 2,
  },
  txtInfor: {
    alignSelf: "flex-end",
    fontSize: 10,
    marginRight: 10,
    marginVertical: 5,
  },
  boxInput: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  autocomplete: {
    alignSelf: "stretch",
    height: 50,
    margin: 10,
    marginTop: 50,
    backgroundColor: "#FFF",
    borderColor: "lightblue",
    borderWidth: 1,
  },
  styFlex1: {
    flex: 1,
  },
  styFlex1List: {
    flex: 1,
    marginTop: 15,
  },
  styFlex1Main: {
    flex: 1,
    backgroundColor: "#003567",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  styFlex5: {
    flex: 5,
  },
  styFlex02: {
    flex: 0.2,
  },
});

export default First;
