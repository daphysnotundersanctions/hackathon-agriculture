import axios from "axios";

const serverUrl = "http://84.252.128.45:8000/";
const headersConfig: Object = {
  "X-Custom-Header": "foobar",
};

export const API = axios.create({
  baseURL: serverUrl,
  headers: headersConfig,
});
