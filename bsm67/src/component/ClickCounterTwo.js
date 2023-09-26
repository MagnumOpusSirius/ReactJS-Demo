import React, { Component } from "react";

class ClickCounterTwo extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <button onClick={increment}>
        {this.props.name}Clicked {count} times
      </button>
    );
  }
}

export default ClickCounterTwo;
