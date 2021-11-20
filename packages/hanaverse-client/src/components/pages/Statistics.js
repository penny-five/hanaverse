import React from "react";
import GameCanvas from "../Canvas";
import HananoidMoodMeter from "../HananoidMoodMeter";
import VillageNamePanel from "../VillageNamePanel";
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
    <div>
      <div className="canvasWrapper">
        <GameCanvas />
      </div>
      <VillageNamePanel name="Yolo Village" />
      <div className="statisticsPage">
        <div class="headerWrapper">
          <h2 className="title">Hananoid mood</h2>
        </div>
        <HananoidMoodMeter value={0.1} />
        <div class="headerWrapper">
          <h2 className="title">Weather forecast</h2>
        </div>
        <WeatherForecast weather="BURNING_HOT" />
        <div class="headerWrapper">
          <h2 className="title">Water consumption</h2>
          <span>Liters per day</span>
        </div>
        <WaterConsumptionChart measurements={MEASUREMENTS} />
      </div>
    </div>
  );
};

export default StatisticsPage;
