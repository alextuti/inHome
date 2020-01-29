import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./ControlPanelRoomCard.module.scss";

const ControlPanelRoomCard = props => {
  return (
    <NavLink
      to={"/control-panel/" + props.roomLink}
      className={classes.ControlPanelRoomCard}
      activeClassName={classes["ControlPanelRoomCard--active"]}
    >
      <article className={classes.ControlPanelRoomCard__Content}>
        <h1 className={classes.ControlPanelRoomCard__Title}>
          {props.roomName}
        </h1>
        <article className={classes.ControlPanelRoomCard__Temperature}>
          <h2 className={classes.ControlPanelRoomCard__Heading}>Temperature</h2>
          <p className={classes.ControlPanelRoomCard__Value}>
            {props.roomTemperature}°C
          </p>
        </article>
        <article className={classes.ControlPanelRoomCard__Humidity}>
          <h2 className={classes.ControlPanelRoomCard__Heading}>Humidity</h2>
          <p className={classes.ControlPanelRoomCard__Value}>
            {props.roomHumidity}%
          </p>
        </article>
      </article>
    </NavLink>
  );
};

export default ControlPanelRoomCard;
