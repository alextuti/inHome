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
        icon="settings"
        alt="Settings link icon"
        link="/settings"
      />
      <NavigationBarListItem
        icon="statistics"
        alt="Statistics link icon"
        link="/statistics"
      />
      <NavigationBarListItem icon="media" alt="Media link icon" link="/media" />
      <NavigationBarListItem icon="help" alt="Help link icon" link="/help" />
    </ul>
  );
};

export default NavigationBarList;
