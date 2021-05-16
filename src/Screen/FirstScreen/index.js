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
import { Searchbar, TextInput } from "react-native-paper";

const First = ({ datas, dataTotal, dateUpdate, isLoading, navigation }) => {
  const moment = require("moment");

  const [textSearch, setTextSearch] = useState("");

  return (
    <View style={styles.firstContainer}>
      <View style={styles.styFlex1}>
        <Text style={styles.stytxt}>COVID-19 TRACKER</Text>
        <View style={styles.styFlex1Main}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#FF0000" />
          ) : (
            <View style={styles.totalContainer}>
              <View style={styles.boxTotal}>
                <Text>TotalConfirmed</Text>
                <Text>{dataTotal.TotalConfirmed}</Text>
              </View>
              <View style={styles.boxTotal}>
                <Text>TotalRecovered</Text>
                <Text>{dataTotal.TotalRecovered}</Text>
              </View>
              <View style={styles.boxTotal}>
                <Text>TotalDeaths</Text>
                <Text>{dataTotal.TotalDeaths}</Text>
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
              <Button
                title="TotalConfirmed"
                onPress={() => {
                  navigation.navigate("Confirmed", {
                    datas: datas,
                  });
                }}
              />
              <Button
                title="TotalRecoverd"
                onPress={() => {
                  navigation.navigate("Recoverd", {
                    datas: datas,
                  });
                }}
              />
              <Button
                title="TotalDeath"
                onPress={() => {
                  navigation.navigate("Death", {
                    datas: datas,
                  });
                }}
              />
            </View>
            <View style={styles.boxInput}>
              <TextInput
                label="Search Country"
                mode="outlined"
                value={textSearch}
                onChangeText={(textSearch) => setTextSearch(textSearch)}
              />
            </View>
          </View>
          <View style={styles.styFlex1List}>
            <SafeAreaView style={{ margin: 10 }}>
              <View style={{ marginHorizontal: 20 }}>
                <ScrollView style={styles.scrollView}>
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
                            borderWidth: 0.25,
                            borderBottomRightRadius: 20,
                            borderBottomLeftRadius: 20,
                            paddingHorizontal: 20,
                            paddingVertical: 10,
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
  stytxt: { alignSelf: "center", fontSize: 25 },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  boxTotal: {
    width: 110,
    height: 100,
    backgroundColor: "#fca4ac",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 15,
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
  },
  boxInput: {
    height: 50,
    marginHorizontal: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: "#f8a2ab",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 15,
  },
  styFlex1Main: {
    flex: 1,
    backgroundColor: "#fca4ac",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  styFlex5: {
    flex: 5,
  },
  styFlex02: {
    flex: 0.2,
  },
  scrollView: {},
});

export default First;
