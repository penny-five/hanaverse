import React from "react";
import HananoidMoodMeter from "../HananoidMoodMeter";
import WaterConsumptionChart from "../WaterConsumptionChart";
import WeatherForecast from "../WeatherForecast";

import "./Statistics.css";

const MEASUREMENTS = [
  {
    date: "2021-01-01",
    liters: 130,
  },
  {
    date: "2021-01-01",
    liters: 220,
  },
  {
    date: "2021-01-01",
    liters: 300,
  },
  {
    date: "2021-01-01",
    liters: 500,
  },
];

const StatisticsPage = () => {
  return (
    <div className="statisticsPage">
      <h2 className="title">Hananoid mood</h2>
      <HananoidMoodMeter value={0.1} />
      <h2 className="title">Weather forecast</h2>
      <WeatherForecast weather="BURNING_HOT" />
      <h2 className="title">Water consumption</h2>
      <WaterConsumptionChart measurements={MEASUREMENTS} />
    </div>
  );
};

export default StatisticsPage;
