import axios from "axios";

const MOCK_RESPONSE = {
  householdSize: 3,
  villageName: "Hanaville",
  hananoids: [
    {
      name: "Kwork",
      color: "GREEN",
      age: 8,
    },
    {
      name: "Zark",
      color: "RED",
      age: 13,
    },
  ],
  hananoidHappiness: 0.2,
  weatherForecast: "BURNING_HOT",
  waterConsumptionHistory: [
    {
      date: "2020-01-01",
      liters: 543,
    },
    {
      date: "2020-01-02",
      liters: 123,
    },
    {
      date: "2020-01-03",
      liters: 231,
    },
    {
      date: "2020-01-04",
      liters: 234,
    },
    {
      date: "2020-01-05",
      liters: 234,
    },
    {
      date: "2020-01-06",
      liters: 121,
    },
    {
      date: "2020-01-07",
      liters: 180,
    },
  ],
};

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
