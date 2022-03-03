import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: API_URL,
});

export default instance;
