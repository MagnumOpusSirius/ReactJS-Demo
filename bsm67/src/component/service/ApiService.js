import axios from "axios";

class ApiService {
  fetchUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  }
}

export default new ApiService();
