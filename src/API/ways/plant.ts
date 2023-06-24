import { API } from "../index.ts";

const prefix: String = "";

const postPlantInfo = (plantData: Object) => {
  return API.post(`${prefix}`, { plantData });
};

const getPlantInfo = () => {
  return API.get(`${prefix}`);
};

export { postPlantInfo, getPlantInfo };
