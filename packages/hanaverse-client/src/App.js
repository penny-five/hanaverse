import "marvel-devices.css/assets/devices.min.css";
import { Chart } from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";

import { useEffect, useState } from "react";

import "./App.css";
import BottomNavBar from "./components/BottomNavbar";
import HananoidsPage from "./components/pages/Hananoids";
import InfoPage from "./components/pages/Info";
import StatisticsPage from "./components/pages/Statistics";
import api from "./api";

Chart.register(annotationPlugin);

function App() {
  const [currentPage, setCurrentPage] = useState("stats");
  const [currentVillage, setCurrentVillage] = useState(null);

  useEffect(() => {
    document.title = "HanaWorld";
  }, []);

  const villageId = new URLSearchParams(window.location.search).get("id") || 1;

  useEffect(() => {
    api.fetchVillage(villageId).then((res) => {
      setCurrentVillage(res);
    });
  }, [villageId]);

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
          {!currentVillage && (
            <div className="loadingScreen">
              <h2>Loading...</h2>
            </div>
          )}
          {currentVillage && (
            <div className="pageWrapper">
              <div className="contentWrapper">
                {currentPage === "stats" && <StatisticsPage village={currentVillage} />}
                {currentPage === "hananoids" && <HananoidsPage village={currentVillage} />}
                {currentPage === "info" && <InfoPage />}
              </div>
            </div>
          )}
          {currentVillage && (
            <div className="navbarWrapper">
              <BottomNavBar
                currentPage={currentPage}
                village={currentVillage}
                onSelect={(page) => onSelectPage(page)}
              />
            </div>
          )}
        </div>
        <div className="home"></div>
        <div className="bottom-bar"></div>
      </div>
    </div>
  );
}

export default App;
