import React, { Component } from "react";
class EventBinding extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello",
    };
  }
  clickHandler = () => {
    console.log("click handler called");
    this.setState({
      message: "Goodbye",
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
