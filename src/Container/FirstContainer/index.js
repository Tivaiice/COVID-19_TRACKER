import React from "react";
import First from "../../Screen/FirstScreen";

class FirstContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    await fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    // console.log("Data", this.state.data);
    return (
      <First
        navigation={this.props.navigation}
        data={this.state.data}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default FirstContainer;
