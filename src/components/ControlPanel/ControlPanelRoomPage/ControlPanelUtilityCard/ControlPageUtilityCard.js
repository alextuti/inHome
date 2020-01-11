import React from "react";
import SlidingMeter from "../../../SlidingMeter/SlidingMeter";

import classes from "./ControlPanelUtilityCard.module.scss";

const ControlPanelUtilityCard = props => {
  return (
    <article className={classes.ControlPanelUtilityCard}>
      <h2 className={classes.ControlPanelUtilityCard__Header}>
        {props.utilityName}
      </h2>
      <SlidingMeter
        meterType={props.utilityName}
        key={props.room + "-" + props.utilityName + "Meter"}
        id={props.room + "-" + props.utilityName + "Meter"}
      />
    </article>
  );
};

export default ControlPanelUtilityCard;
