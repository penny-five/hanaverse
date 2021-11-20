import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const api = {
  async fetchVillage(id) {
    const res = await client.get(`village/${id}/state`);

    return res.data;
  },
};

export default api;
