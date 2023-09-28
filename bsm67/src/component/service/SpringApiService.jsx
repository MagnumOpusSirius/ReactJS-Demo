import axios from "axios";

/*
POST(add user): http://localhost:8081/users/signup

PUT: http://localhost:8081/users/update/{id}

GET FetchAll: http://localhost:8081/users/fetchAll

Delete: http://localhost:8081/users/{id}
*/

class SpringApiService {
  fetchUsers() {
    return axios.get("http://localhost:8081/users/fetchAll");
  }

  addUser(user) {
    return axios.post("http://localhost:8081/users/signup", user);
  }

  deleteUser(userId) {
    return axios.delete("http://localhost:8081/users/" + userId);
  }

  fetchUserById(userId) {
    return axios.get("http://localhost:8081/users/" + userId);
  }

  updateUser(user) {
    return axios.put("http://localhost:8081/users/update", user);
  }
}

export default new SpringApiService();
