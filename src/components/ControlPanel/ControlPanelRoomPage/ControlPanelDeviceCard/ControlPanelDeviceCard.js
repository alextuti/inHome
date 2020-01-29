import React from "react";

import classes from "./ControlPanelDeviceCard.module.scss";
import ToggleSwitch from "../../../InputComponents/ToggleSwitch/ToggleSwitch";

const ControlPanelDeviceCard = props => {
  return (
    <article className={classes.ControlPanelDeviceCard}>
      <h1 className={classes.ControlPanelDeviceCard__Header}>
        {props.deviceName}
      </h1>
      <ToggleSwitch
        name={props.deviceName + props.room}
        defaultChecked={props.on}
      />
    </article>
  );
};

export default ControlPanelDeviceCard;
