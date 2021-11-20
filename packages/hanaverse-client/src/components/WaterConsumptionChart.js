import * as dateFns from "date-fns";
import React from "react";
import { Line as LineChart } from "react-chartjs-2";

import "./WaterConsumptionChart.css";

const OPTIMAL_WATER_LEVEL = 200;

const WaterConsumptionChart = ({ measurements }) => {
  const sortedMeasurements = measurements.sort(
    (first, second) =>
      dateFns.parseISO(first.date).getTime() - dateFns.parseISO(second.date).getTime()
  );

  const data = {
    labels: sortedMeasurements
      .map((measurement) => measurement.date)
      .map((date) => dateFns.format(dateFns.parseISO(date), "EEEE")),
    datasets: [
      {
        label: "Water consumption",
        data: sortedMeasurements.map((measurement) => measurement.liters),
        borderColor: "#302D43",
        borderWidth: 2,
        pointBorderColor: "#302D43",
        pointBackgroundColor: sortedMeasurements.map((measurement) =>
          measurement.liters > OPTIMAL_WATER_LEVEL ? "#E44242" : "white"
        ),
        pointRadius: 5,
        backgroundColor: "#7B61FF",
        fill: true,
      },
    ],
  };

  return (
    <div className="waterConsumptionChart">
      <LineChart
        data={data}
        options={{
          animation: false,
          scales: {
            x: {
              display: false,
            },
            y: {
              display: false,
              min: 0,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            annotation: {
              annotations: {
                line: {
                  type: "line",
                  yMin: OPTIMAL_WATER_LEVEL,
                  yMax: OPTIMAL_WATER_LEVEL,
                  borderColor: "#302D43",
                  borderWidth: 3,
                  borderDash: [6, 6],
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default WaterConsumptionChart;
