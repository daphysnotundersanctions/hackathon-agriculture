import { API } from "../index";

const prefix = "";

const getAllTasks = () => {
  return API.get(`${prefix}/`);
};

export { getAllTasks };
