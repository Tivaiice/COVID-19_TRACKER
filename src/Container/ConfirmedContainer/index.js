import React, { Component } from "react";
import Confirmed from "../../Screen/ConfirmedScreen";

class ConfirmedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.datas = this.props.navigation.getParam("datas", undefined);
  }

  render() {
    // console.log("datasConfirmedContainer", this.datas);

    return <Confirmed navigation={this.props.navigation} datas={this.datas} />;
  }
}

export default ConfirmedContainer;
