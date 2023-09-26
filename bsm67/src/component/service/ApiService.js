import axios from "axios";

class ApiService {
  fetchUsers() {
    return axios.get("http://localhost:8080/api/users");
  }
}

export default new ApiService();
