import "marvel-devices.css/assets/devices.min.css";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

import { useState } from "react";

import "./App.css";
import BottomNavBar from "./components/BottomNavbar";
import HananoidsPage from "./components/pages/Hananoids";
import InfoPage from "./components/pages/Info";
import StatisticsPage from "./components/pages/Statistics";

Chart.register(annotationPlugin);

function App() {
  const [currentPage, setCurrentPage] = useState("stats");

  const onSelectPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <div className="marvel-device iphone8plus silver">
        <div className="top-bar"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="sensor"></div>
        <div className="speaker"></div>
        <div className="screen">
          <div className="pageWrapper">
            <div className="contentWrapper">
              {currentPage === "stats" && <StatisticsPage />}
              {currentPage === "hananoids" && <HananoidsPage />}
              {currentPage === "info" && <InfoPage />}
            </div>
          </div>
          <div className="navbarWrapper">
            <BottomNavBar currentPage={currentPage} onSelect={(page) => onSelectPage(page)} />
          </div>
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
}

export default App;
