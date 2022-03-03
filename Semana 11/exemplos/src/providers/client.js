import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(function (config) {
  const data = localStorage.getItem("token");
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: data ? `Bearer ${JSON.parse(data).token}` : "",
    },
  };
});
export default instance;
