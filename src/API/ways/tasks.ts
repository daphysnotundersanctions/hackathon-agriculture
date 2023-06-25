import { API } from "../index";

const prefix = "tasks/";

const getAllTasks = () => {
  return API.get(`${prefix}/`);
};

const postTasks = (data: Object) => {
  return API.post(`${prefix}/`, { data });
};

const getTaskByID = (id: String) => {
  return API.get(`${prefix}/${id}`);
};

export { getAllTasks, postTasks, getTaskByID };
