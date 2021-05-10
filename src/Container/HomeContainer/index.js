import React from "react";
import Home from "../../Screen/HomeScreen";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Home navigation={this.props.navigation} />;
  }
}

export default HomeContainer;
