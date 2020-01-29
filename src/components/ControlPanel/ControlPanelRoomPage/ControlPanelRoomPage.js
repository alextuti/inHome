import React, { useEffect, useState } from "react";

import classes from "./ControlPanelRoomPage.module.scss";
import ControlPanelUtilityCard from "./ControlPanelUtilityCard/ControlPageUtilityCard";
import ControlPanelDeviceCard from "./ControlPanelDeviceCard/ControlPanelDeviceCard";
import axios from "../../../axios";

const ControlPanelRoomPage = props => {
  const [devicesState, updateDevicesState] = useState([]);
  useEffect(() => {
    axios
      .get(`${props.url}.json`)
      .then(res => {
        const devices = [];
        res.data.devices.map(device => {
          return devices.push(device);
        });
        updateDevicesState(devices);
      })
      .catch(err => console.log(err));
  }, [props.url]);

  return (
    <section className={classes.ControlPanelRoomPage}>
      <h1 className={classes.ControlPanelRoomPage__Header}>{props.roomName}</h1>
      <section className={classes.ControlPanelRoomPage__Utilities}>
        <h2 className={classes.ControlPanelRoomPage__Utilities__Header}>
          Utilities
        </h2>
        <ControlPanelUtilityCard
          utilityName="temperature"
          room={props.roomName}
        />
        <ControlPanelUtilityCard
          utilityName="luminosity"
          room={props.roomName}
        />
      </section>
      <section className={classes.ControlPanelRoomPage__Devices}>
        <h2 className={classes.ControlPanelRoomPage__Devices__Header}>
          Devices
        </h2>
        <section className={classes.ControlPanelRoomPage__Devices__List}>
          {devicesState.map((device, i) => {
            return (
              <ControlPanelDeviceCard
                key={device[0] + "-" + props.roomName}
                deviceName={device[0]}
                on={device[1]}
                url={props.url}
                index={i}
                room={props.roomName}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default ControlPanelRoomPage;
