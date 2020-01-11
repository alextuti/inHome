import React from "react";
import NavigationBarList from "./NavigationBarList/NavigationBarList";

import classes from "./NavigationBar.module.scss";

const NavigationBar = () => {
  return (
    <nav className={classes.NavigationBar}>
      <NavigationBarList />
    </nav>
  );
};

export default NavigationBar;
