import { API } from "../index.ts";

const postUser = (data: Object) => {
  return API.post("users/", { data });
};

const getUser = () => {
  return API.get("users/");
};

const getUserTasks = (userID: Number) => {
  return API.get(`tasks/user/${userID}`);
};

export { postUser, getUser, getUserTasks };
