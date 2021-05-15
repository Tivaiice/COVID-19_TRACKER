import React, { Component } from "react";
import Recoverd from "../../Screen/RecoverdScreen";

class RecoverdContainer extends React.Component {
  constructor(props) {
    super(props);
    this.datas = this.props.navigation.getParam("datas", undefined);
  }

  render() {
    // console.log("datasConfirmedContainer", this.datas);

    return <Recoverd navigation={this.props.navigation} datas={this.datas} />;
  }
}

export default RecoverdContainer;
