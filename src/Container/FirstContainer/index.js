import React, { Component } from "react";
import { Text, View } from "react-native";
import AutoComplete from "react-native-autocomplete";
import First from "../../Screen/FirstScreen";

class FirstContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      dataTotal: [],
      dateUpdate: "",
      isLoading: true,
      click: 0,
    };
  }
  componentDidMount() {
    this.covidApi();
  }

  async covidApi() {
    await fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          datas: json.Countries,
          dataTotal: json.Global,
          dateUpdate: json.Date,
        });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    // console.log("Data999", this.state.dataTotal);

    return (
      <First
        navigation={this.props.navigation}
        datas={this.state.datas}
        dataTotal={this.state.dataTotal}
        dateUpdate={this.state.dateUpdate}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default FirstContainer;
