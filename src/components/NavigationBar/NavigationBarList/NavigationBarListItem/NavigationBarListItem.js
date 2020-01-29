import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationBarListItem.module.scss";

const NavigationBarListItem = props => {
  return (
    <li className={classes.NavigationBarListItem}>
      <NavLink
        to={props.link}
        className={classes.NavigationBarListItem__Link}
        activeClassName={classes["NavigationBarListItem__Link--active"]}
      >
        <img
          src={require(`../../../../assets/icons/${props.icon}.svg`)}
          alt={props.alt}
          className={classes.NavigationBarListItem__Link__Icon}
        ></img>
      </NavLink>
    </li>
  );
};

export default NavigationBarListItem;
