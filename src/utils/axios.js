import Axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_BASE_URL;

console.log;
const instance = Axios.create({
  baseURL: "http://20.102.118.211:8000/",
  //   withCredentials: true,
//   headers: {
//     "ngrok-skip-browser-warning": true,
//   },
});

instance.interceptors.request.use(function (config) {
  // if needed
  config.headers["Accept"] = "application/json";
//   config.headers["ngrok-skip-browser-warning"] ="69420";
  


  if (config.data instanceof FormData) {
    config.headers["Content-Type"] = "multipart/form-data";
  }

  return config;
});

export default instance;
