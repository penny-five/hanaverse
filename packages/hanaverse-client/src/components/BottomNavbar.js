import React from "react";
import classNames from "classnames";

import "./BottomNavbar.css";
import { ReactComponent as InfoLogo } from "../resources/navbar-info.svg";
import { ReactComponent as HananoidsLogo } from "../resources/navbar-hananoids.svg";
import { ReactComponent as StatsLogo } from "../resources/navbar-stats.svg";

const BottomNavBar = ({ currentPage, onSelect }) => {
  return (
    <nav className="bottomNavbar">
      <ul className="itemWrapper">
        <li
          className={classNames({
            item: true,
            selected: currentPage === "stats",
          })}
          onClick={() => onSelect("stats")}
        >
          <StatsLogo />
        </li>
        <li
          className={classNames({
            item: true,
            selected: currentPage === "hananoids",
          })}
          onClick={() => onSelect("hananoids")}
        >
          <HananoidsLogo />
        </li>
        <li
          className={classNames({
            item: true,
            selected: currentPage === "info",
          })}
          onClick={() => onSelect("info")}
        >
          <InfoLogo />
        </li>
      </ul>
    </nav>
  );
};

BottomNavBar.defaultProps = {
  currentPage: "info",
  onSelect: () => {},
};

export default BottomNavBar;
