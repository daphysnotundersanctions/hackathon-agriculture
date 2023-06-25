import axios from "axios";

const serverUrl = "http://51.250.84.244:8000/api/";
const headersConfig: Object = {
  "X-Custom-Header": "foobar",
};

export const API = axios.create({
  baseURL: serverUrl,
  headers: headersConfig,
});
