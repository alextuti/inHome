import React from "react";
import ToggleSwitch from "../../InputComponents/ToggleSwitch/ToggleSwitch";

import classes from "./SettingCard.module.scss";

const SettingCard = props => {
  return (
    <article className={classes.SettingCard}>
      <section className={classes.SettingCard__Text}>
        <p>{props.settingTitle}</p>
        <p>{props.settingDescription}</p>
      </section>

      <ToggleSwitch
        name={props.settingName}
        defaultChecked={props.defaultChecked}
      />
    </article>
  );
};

export default SettingCard;
