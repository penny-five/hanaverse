import React from "react";
import classNames from "classnames";

import { ReactComponent as SadIcon } from "../resources/moodmeter-sad.svg";
import { ReactComponent as HappyIcon } from "../resources/moodmeter-happy.svg";

import "./HananoidMoodMeter.css";

const HananoidMoodMeter = ({ value }) => {
  return (
    <div className={classNames({ hananoidMoodMeter: true, poor: value < 0.3, good: value >= 0.3 })}>
      <SadIcon className="icon" />
      <div className="gauge">
        <div className="bar" style={{ width: `${value * 100}%` }} />
      </div>
      <HappyIcon className="icon" />
    </div>
  );
};

export default HananoidMoodMeter;
