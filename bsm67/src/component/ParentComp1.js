import React, { Component } from "react";
import PureCompDemo from "./PureCompDemo";
import RegularComp from "./RegularComp";
class ParentComp1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Allen",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Hani",
      });
    }, 2000);
  }
  render() {
    console.log("Parent Component render");
    return (
      <div>
        {/* Parent Component */}
        {/* <RegularComp name={this.state.name} /> */}
        <PureCompDemo key={this.state.name} />
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
export default ParentComp1;
