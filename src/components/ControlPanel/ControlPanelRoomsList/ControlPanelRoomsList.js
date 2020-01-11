import React from "react";

import classes from "./ControlPanelRoomsList.module.scss";
import ControlPanelRoomCard from "./ControlPanelRoomLink/ControlPanelRoomCard";

const ControlPanelRoomsList = () => {
  return (
    <section className={classes.ControlPanelRoomsList}>
      <ControlPanelRoomCard
        roomName="Living room"
        roomLink="living-room"
        roomTemperature="20"
        roomHumidity="15"
      ></ControlPanelRoomCard>
      <ControlPanelRoomCard
        roomName="Kitchen"
        roomLink="kitchen"
        roomTemperature="22"
        roomHumidity="20"
      ></ControlPanelRoomCard>
      <ControlPanelRoomCard
        roomName="Bedroom 1"
        roomLink="bedroom1"
        roomTemperature="21"
        roomHumidity="10"
      ></ControlPanelRoomCard>
      <ControlPanelRoomCard
        roomName="Bedroom 2"
        roomLink="bedroom2"
        roomTemperature="21"
        roomHumidity="10"
      ></ControlPanelRoomCard>
    </section>
  );
};

export default ControlPanelRoomsList;
