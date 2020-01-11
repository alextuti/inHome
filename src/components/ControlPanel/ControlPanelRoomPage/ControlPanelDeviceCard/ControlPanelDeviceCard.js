import React, { useState } from "react";

import classes from "./ControlPanelDeviceCard.module.scss";

const ControlPanelDeviceCard = props => {
  const [powerState, updatePowerState] = useState(props.on);

  const devicePowerHandler = () => {
    updatePowerState(prevPowerState => !prevPowerState);
  };

  console.log(props.deviceName + " is " + (powerState ? "on" : "off"));

  return (
    <article className={classes.ControlPanelDeviceCard}>
      <h1 className={classes.ControlPanelDeviceCard__Header}>
        {props.deviceName}
      </h1>
      <label
        htmlFor={props.deviceName + props.room}
        className={classes.ControlPanelDeviceCard__CheckboxLabel}
      >
        <input
          type="checkbox"
          id={props.deviceName + props.room}
          name={props.deviceName + props.room}
          className={classes.ControlPanelDeviceCard__Checkbox}
          defaultChecked={props.on}
          onChange={devicePowerHandler}
          value={powerState}
        />
        <span className={classes.ControlPanelDeviceCard__CheckboxSlider}></span>
      </label>
    </article>
  );
};

export default ControlPanelDeviceCard;
