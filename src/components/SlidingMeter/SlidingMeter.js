import React, { useState } from "react";

import classes from "./SlidingMeter.module.scss";

const SlidingMeter = props => {
  // Depending on the type of meter needed, the unit changes.
  let meterUnit = "";
  let rangeConfiguration;
  switch (props.meterType) {
    case "temperature":
      meterUnit = "°C";
      rangeConfiguration = {
        min: 10,
        max: 25,
        step: 1
      };
      break;
    case "luminosity":
      meterUnit = "%";
      rangeConfiguration = {
        min: 0,
        max: 100,
        step: 1
      };
      break;
    default:
      meterUnit = "";
      rangeConfiguration = {
        min: 0,
        max: 100,
        step: 1
      };
  }

  const [slidingMeterValue, updateSlidingMeterValue] = useState(
    rangeConfiguration.max
  );

  return (
    <div className={classes.SlidingMeter}>
      <span className={classes.SlidingMeter__Value}>
        {slidingMeterValue}
        {meterUnit}
      </span>
      <input
        className={classes.SlidingMeter__Range}
        type="range"
        name={props.id}
        id={props.id}
        min={rangeConfiguration.min}
        max={rangeConfiguration.max}
        step={rangeConfiguration.step}
        // defaultValue={rangeConfiguration.max}
        value={slidingMeterValue}
        onChange={e => updateSlidingMeterValue(e.target.value)}
      />
      <div
        className={[
          classes.SlidingMeter__Gradient,
          classes["SlidingMeter__Gradient--" + props.meterType]
        ].join(" ")}
      ></div>
    </div>
  );
};

export default SlidingMeter;
