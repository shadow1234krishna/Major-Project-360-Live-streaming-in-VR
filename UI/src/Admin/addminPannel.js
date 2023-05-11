
import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
  });
const addminPannel = async() => {
    try {
        const { data } = await api.post("http://127.0.0.1:8000/admin/");
        return data;
      } catch (error) {
        throw Error(error.response.data.message);
      }
    }
    export default addminPannel;