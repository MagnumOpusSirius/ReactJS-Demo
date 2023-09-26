import React, { Component } from "react";

class User1 extends Component {
  componentWillUnmount() {
    console.warn("User1 unmount");
    alert("user has been deleted");
  }
  render() {
    console.warn("render call");
    return (
      <div>
        <h1>User Name: Allen</h1>
        <h1>User Email: allen@gmail.com</h1>
      </div>
    );
  }
}

export default User1;
