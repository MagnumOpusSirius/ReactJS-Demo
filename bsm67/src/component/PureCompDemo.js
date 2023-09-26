import React, { PureComponent } from "react";

class PureCompDemo extends PureComponent {
  render() {
    console.warn("Pure Component render");
    return <div>Pure Component{this.props.name}</div>;
  }
}
export default PureCompDemo;
