import axios from "axios";

const serverUrl = "51.250.75.250";
const headersConfig = {
  "X-Custom-Header": "foobar",
};

export const API = axios.create({
  baseURL: serverUrl,
  headers: headersConfig,
});
