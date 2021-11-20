import { Canvas } from "konva/lib/Canvas";
import "marvel-devices.css/assets/devices.min.css";
import { useState } from "react";
import { Layer } from "react-konva";

import "./App.css";
import BottomNavBar from "./components/BottomNavbar";
import GameCanvas from "./components/Canvas";
import HananoidsPage from "./components/pages/Hananoids";
import InfoPage from "./components/pages/Info";
import StatisticsPage from "./components/pages/Statistics";
import VillageNamePanel from "./components/VillageNamePanel";

function App() {
  const [currentPage, setCurrentPage] = useState("info");

  const onSelectPage = (page) => {
    console.log(page);
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
          <div className="contentWrapper">
            <div className="canvasWrapper">
              <GameCanvas />
            </div>
            <VillageNamePanel name="Yolo Village" />
            <div className="pageWrapper">
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
