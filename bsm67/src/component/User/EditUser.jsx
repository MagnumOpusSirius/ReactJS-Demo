import React, { Component } from "react";
import SpringApiService from "../service/SpringApiService";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      email: "",
      mobile: "",
      age: "",
      nationality: "",
    };
    this.updateUser = this.updateUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    const userId = window.localStorage.getItem("userId");
    if (!userId) {
      alert("Invalid action.");
      this.props.history.push("/listuser");
      // return;
    } else {
      //fetch the users data by the id:
      SpringApiService.fetchUserById(userId)
        .then((response) => {
          const user = response.data;
          this.setState({
            id: user.userId,
            name: user.name,
            email: user.email,
            mobile: user.mobile,
            age: user.age,
            nationality: user.nationality,
          });
        })
        .catch((error) => {
          console.error("Error - " + error);
        });
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  updateUser = (e) => {
    e.preventDefault();

    const updatedUser = {
      id: this.state.id,
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      age: this.state.age,
      nationality: this.state.nationality,
    };

    SpringApiService.updateUser(updatedUser)
      .then((res) => {
        this.setState({ message: "User updated successfully." });
        this.props.history.push("/listuser");
      })
      .catch((error) => {
        console.error("Error - " + error);
      });
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Edit User</h2>
        <form onSubmit={this.updateUser}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              value={this.state.mobile}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              type="text"
              name="age"
              className="form-control"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Nationality:</label>
            <input
              type="text"
              name="nationality"
              className="form-control"
              value={this.state.nationality}
              onChange={this.handleChange}
            />
          </div>
          <button className="btn btn-success" type="submit">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default EditUser;
