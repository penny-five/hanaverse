import React from "react";

import "./BottomNavbar.css";

const BottomNavBar = ({ currentPage, onSelect }) => {
  return (
    <nav className="bottomNavbar">
      <ul className="itemWrapper">
        <li className="item" onClick={() => onSelect("stats")}>
          Stats
        </li>
        <li className="item" onClick={() => onSelect("hananoids")}>
          Hananoids
        </li>
        <li className="item" onClick={() => onSelect("info")}>
          Info
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
