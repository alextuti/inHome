import React from "react";
import NavigationBarListItem from "./NavigationBarListItem/NavigationBarListItem";

import classes from "./NavigationBarList.module.scss";

const NavigationBarList = () => {
  return (
    <ul className={classes.NavigationBarList}>
      <NavigationBarListItem
        icon="dashboard"
        alt="Dashboard link icon"
        link="/control-panel"
      />
      <NavigationBarListItem
        icon="statistics"
        alt="Statistics link icon"
        link="/statistics"
      />
      <NavigationBarListItem icon="help" alt="Help link icon" link="/faq" />
      <NavigationBarListItem
        icon="settings"
        alt="Settings link icon"
        link="/settings"
      />
    </ul>
  );
};

export default NavigationBarList;
