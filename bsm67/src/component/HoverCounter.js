import React, { Component } from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        {this.props.name} Hover {count} times
      </h2>
    );
    // const { count, incrementCount } = this.props;
    // return (
    //   <div>
    //     <h2 onMouseOver={incrementCount}>
    //       {this.props.name} Hover {count} times
    //     </h2>
    //   </div>
    // );
  }
}
export default WithCounter(HoverCounter, 10);
