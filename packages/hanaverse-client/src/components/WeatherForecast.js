import React from "react";

import { ReactComponent as BurningHotIcon } from "../resources/weather-burning-hot.svg";
import { ReactComponent as CloudyIcon } from "../resources/weather-cloudy.svg";
import { ReactComponent as MildRainIcon } from "../resources/weather-mild-rain.svg";
import { ReactComponent as HeavyRainIcon } from "../resources/weather-heavy-rain.svg";

import "./WeatherForecast.css";

const WeatherForecast = ({ weather }) => {
  let label = "";

  switch (weather) {
    case "BURNING_HOT":
      label = "Burning hot";
      break;
    case "CLOUDY":
      label = "Cloudy";
      break;
    case "MILD_RAIN":
      label = "Mild rain";
      break;
    case "HEAVY_RAIN":
      label = "Heavy rain";
      break;
    default:
      label = "Unknown";
      break;
  }

  return (
    <div className="weatherForecast">
      <div class="iconWrapper">
        {weather === "BURNING_HOT" && <BurningHotIcon className="icon" />}
        {weather === "CLOUDY" && <CloudyIcon className="icon" />}
        {weather === "MILD_RAIN" && <MildRainIcon className="icon" />}
        {weather === "HEAVY_RAIN" && <HeavyRainIcon className="icon" />}
      </div>
      <div class="textWrapper">
        <h2>{label}</h2>
        <span>Until midnight</span>
      </div>
    </div>
  );
};

export default WeatherForecast;
