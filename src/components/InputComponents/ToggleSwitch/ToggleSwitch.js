import React, { useState } from "react";

import classes from "./ToggleSwitch.module.scss";

const ToggleSwitch = props => {
  const [powerState, updatePowerState] = useState(props.defaultChecked);

  const devicePowerHandler = () => {
    updatePowerState(prevPowerState => !prevPowerState);
  };
  return (
    <label htmlFor={props.name} className={classes.Checkbox__Label}>
      <input
        type="checkbox"
        id={props.name}
        name={props.name}
        className={classes.Checkbox}
        defaultChecked={props.defaultChecked}
        onChange={devicePowerHandler}
        value={powerState}
      />
      <span className={classes.Checkbox__Slider}></span>
    </label>
  );
};

export default ToggleSwitch;
