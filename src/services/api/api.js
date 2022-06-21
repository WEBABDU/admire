import axios from "axios";
import storage from "services/storage/storage";
import config from "config";

export const request = axios.create({
  baseURL: config.baseUrl,
});

request.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${storage.get("token")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// request.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// request.defaults.params = {};
// request.defaults.params["_f"] = "json";
// request.defaults.headers.common["Accept"] = "application/json";
// request.defaults.headers.common["Cache-Control"] = "no-cache";
// request.defaults.headers.common["Content-Type"] =
//   "application/json; charset=utf-8";
