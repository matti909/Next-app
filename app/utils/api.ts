import axios from "axios";

const makeRequest = axios.create({
	baseURL: "http://localhost:1337/api",
	headers: {
		Authorization: "bearer " + "c151465d9a49a5879fa9a2b61a63fb06ad58356933653ed80bee9ca7699efe95cbfc3801ad2e1525823c279f31e8567abb951098e63f0596e69624e77ec035d718be0d8ab9f28c9369d90129f84e6b2145d793e5f8ec1174e7311b8426c26aa28b7301d0e697c34720d94d9759d6bcf4cd448cb87f53c27b31b065bcaf5de2a7",
	},
})
export default makeRequest;