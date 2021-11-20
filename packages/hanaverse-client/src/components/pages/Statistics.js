import React from "react";
import HananoidMoodMeter from "../HananoidMoodMeter";
import WeatherForecast from "../WeatherForecast";

import "./Statistics.css";

const StatisticsPage = () => {
  return (
    <div className="statisticsPage">
      <h2>Hananoid mood</h2>
      <HananoidMoodMeter value={0.1} />
      <h2>Weather forecast</h2>
      <WeatherForecast weather="BURNING_HOT" />
      <h2>Water consumption</h2>
    </div>
  );
};

export default StatisticsPage;
