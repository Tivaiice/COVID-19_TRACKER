import React from "react";
import Two from "../../Screen/TwoScreen";

class TwoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.title = this.props.navigation.getParam("title", undefined);
    this.pic = this.props.navigation.getParam("pic", undefined);
  }

  render() {
    console.log("titleContainer", this.title);
    console.log("picContaine", this.pic);
    return (
      <Two
        navigation={this.props.navigation}
        Title={this.title}
        Pic={this.pic}
      />
    );
  }
}

export default TwoContainer;
