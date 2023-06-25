import { API } from "../index.ts";

const getLogs = () => {
    return API.get('/')
}

export { getLogs };
