import React, { Component } from "react";
import ShowDetail from "../../Screen/ShowDerailScreen";

class ShowDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.detail = this.props.navigation.getParam("detail", undefined);
  }

  render() {
    console.log("ShowDetailContainer", this.detail);

    return (
      <ShowDetail navigation={this.props.navigation} detail={this.detail} />
    );
  }
}

export default ShowDetailContainer;
