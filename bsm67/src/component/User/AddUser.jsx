import React, { Component } from "react";
import SpringApiService from "../service/SpringApiService";
import { withRouter } from "react-router-dom";

class AddUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      age: "",
      nationality: "",
    };
    this.saveUser = this.saveUser.bind(this);
  }

  saveUser = (e) => {
    e.preventDefault(); //line prevents the default form submission behavior, which would cause a page reload.
    let user = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      age: this.state.age,
      nationality: this.state.nationality,
    };
    //line sends a POST request to your server (presumably an API endpoint for user creation) with the user data provided
    SpringApiService.addUser(user)
      .then((res) => {
        this.setState({ message: "User added successfully." });
        this.props.history.push("/listuser");
      })
      .catch((error) => {
        console.error("Error adding user: ", error);
      });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleMobileChange = (event) => {
    this.setState({ mobile: event.target.value });
  };
  handleAgeChange = (event) => {
    this.setState({ age: event.target.value });
  };
  handleNationalityChange = (event) => {
    this.setState({ nationality: event.target.value });
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Add User</h2>
        <form onSubmit={this.saveUser}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              placeholder="mobile"
              name="mobile"
              className="form-control"
              value={this.state.mobile}
              onChange={this.handleMobileChange}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              placeholder="age"
              name="age"
              className="form-control"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input
              type="text"
              placeholder="nationality"
              name="nationality"
              className="form-control"
              value={this.state.nationality}
              onChange={this.handleNationalityChange}
            />
          </div>
          <br />
          <button className="btn btn-success" onClick={this.saveUser}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default AddUser;
