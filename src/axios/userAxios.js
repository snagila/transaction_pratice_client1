import axios from "axios";

// server url
const API_BASE_URL = "http://localhost:8000";
const userEndPoint = "/api/user";
const API_URL = API_BASE_URL + userEndPoint;

// POST | CREATE
export const createUserAxios = (formData) => {
  const response = axios
    .post(`${API_URL}/signup`, formData)
    .then((res) => res.data)
    .catch((error) => console.log("Axios Error:", error));
  return response;
};
