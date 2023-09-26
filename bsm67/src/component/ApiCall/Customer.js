import React, { Component } from "react";
import ApiService from "../service/ApiService";
import { Link } from "react-router-dom";

class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
    };
  }
  componentDidMount() {
    this.loadEmployeeList();
  }
  loadEmployeeList = () => {
    ApiService.fetchUsers().then((res) => {
      this.setState({ customers: res.data });
    });
  };
  render() {
    return (
      <div>
        <h2 className="text-center">Customer Details</h2>
        <Link class="nav-link" to="/add-customer">
          Add Customer
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td>
                  <button className="btn btn-success">Delete</button>
                  <button className="btn btn-success">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Customer;
