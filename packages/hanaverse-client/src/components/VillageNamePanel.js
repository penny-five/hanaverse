import React from "react";

import "./VillageNamePanel.css";

const VillageNamePanel = ({ name }) => {
  return (
    <div className="villageNamePanel">
      <h2 className="name">{name}</h2>
    </div>
  );
};

export default VillageNamePanel;
