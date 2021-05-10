import React from "react";
import About from "../../Screen/AboutScreen";

class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <About navigation={this.props.navigation} />;
  }
}

export default AboutContainer;
