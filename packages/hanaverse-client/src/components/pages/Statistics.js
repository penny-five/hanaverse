import React from "react";
import GameCanvas from "../GameCanvas";
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

const StatisticsPage = ({ village }) => {
  return (
    <div>
      <div className="canvasWrapper">
        <GameCanvas village={village} />
      </div>
      <VillageNamePanel name={village.villageName} />
      <div className="statisticsPage">
        <div class="headerWrapper">
          <h2 className="title">Hananoid mood</h2>
        </div>
        <HananoidMoodMeter value={village.hananoidHappiness} />
        <div class="headerWrapper">
          <h2 className="title">Weather forecast</h2>
        </div>
        <WeatherForecast weather={village.weatherForecast} />
        <div class="headerWrapper">
          <h2 className="title">Water consumption</h2>
          <span>Liters per day</span>
        </div>
        <WaterConsumptionChart measurements={village.waterConsumptionHistory} />
      </div>
    </div>
  );
};

export default StatisticsPage;
