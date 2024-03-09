import axios from "axios";

const APIKit = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 10000,
});
APIKit.defaults.headers.common["Content-Type"] = "application/json";
APIKit.defaults.headers.get["Accepts"] = "application/json";
APIKit.interceptors.request.use(
  (config) => {
    config.headers["X-Auth-Token"] = `SECRET12345`;
    return config;
  },
  (error) => {
    throw error;
  }
);
export default APIKit;
