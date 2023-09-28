import React, { Component } from "react";
import SpringApiService from "../service/SpringApiService";

// navigate cclass: use navigate function

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      message: null,
      editUserId: null, //track the user being edited
      editedName: "",
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.addUser = this.addUser.bind(this);
    this.reloadUserList = this.reloadUserList.bind(this);
  }
  componentDidMount() {
    this.reloadUserList();
  }
  reloadUserList() {
    SpringApiService.fetchUsers()
      .then((res) => {
        console.log(res.data); // Check if the 'id' field is present
        this.setState({ users: res.data });
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }
  deleteUser(userId) {
    SpringApiService.deleteUser(userId).then((res) => {
      this.setState({ message: "User deleted successfully." });
      this.setState({
        users: this.state.users.filter((user) => user.userId !== userId),
      });
    });
  }
  /*
  want to display an edit form within the same page when clicking the "Edit" button, you can achieve this by using conditional rendering. 
    1. In your component's state, add a property (e.g., editUserId) to keep track of which user is being edited. Initialize it to null or -1 to indicate that no user is currently being edited.

    2. When clicking the "Edit" button, set the editUserId in your state to the userId of the user you want to edit. This will trigger a re-render of your component.

    3. In the component's render method, use conditional rendering to check whether editUserId is set. If it is, render the edit form; otherwise, render the list of users
  
  */
  handleEditClick = (userId, name) => {
    this.setState({ editUserId: userId, editedName: name });
  };
  handleNameChange = (event) => {
    this.setState({ editedName: event.target.value });
  };

  handleSaveClick = () => {
    const { editUserId, editedName } = this.state;
    SpringApiService.updateUser(editUserId, editedName).then((res) => {
      this.setState({ message: "User updated successfully." });
      this.setState({ editUserId: null });
      this.reloadUserList();
    });
  };

  handleCancelClick = () => {
    this.setState({ editUserId: null });
  };
  editUser(userId) {
    window.localStorage.setItem("userId", userId);
    this.props.history.push("/listuser");
  }

  addUser() {
    window.localStorage.removeItem("userId");
    this.props.history.push("/adduser");
  }
  render() {
    const { users, editUserId, editedName } = this.state;
    return (
      <div>
        <h2 className="text-center">User Details</h2>
        {/* <Link class="nav-link" to="/adduser">
          Add User
        </Link> */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>userId</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>
                  {editUserId === user.userId ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={this.handleChange}
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.age}</td>
                <td>
                  {editUserId === user.userId ? (
                    <button onClick={this.handleSaveClick}>Save</button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => this.deleteUser(user.userId)}
                      key={`delete-${user.userId}`}
                    >
                      {" "}
                      Delete
                    </button>
                  )}
                  <button
                    className="btn btn-success"
                    onClick={() => this.handleEditClick(user.userId)}
                    key={`edit-${user.userId}`}
                  >
                    {" "}
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListUser;
