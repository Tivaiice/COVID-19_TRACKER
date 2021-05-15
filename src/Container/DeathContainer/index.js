import React, { Component } from "react";
import Death from "../../Screen/DeathScreen";

class DeathContainer extends React.Component {
  constructor(props) {
    super(props);
    this.datas = this.props.navigation.getParam("datas", undefined);
  }

  render() {
    // console.log("datasConfirmedContainer", this.datas);

    return <Death navigation={this.props.navigation} datas={this.datas} />;
  }
}

export default DeathContainer;
