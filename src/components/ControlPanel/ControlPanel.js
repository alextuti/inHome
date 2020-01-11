import React from "react";

import classes from "./ControlPanel.module.scss";
import ControlPanelRoomsList from "./ControlPanelRoomsList/ControlPanelRoomsList";
import { Switch, Route } from "react-router-dom";
import ControlPanelRoomPage from "./ControlPanelRoomPage/ControlPanelRoomPage";

const ControlPanel = () => {
  return (
    <main className={classes.ControlPanel}>
      <ControlPanelRoomsList />
      <Switch>
        <Route
          path="/control-panel/living-room"
          exact
          render={() => (
            <ControlPanelRoomPage
              url="/control-panel/living-room"
              roomName="Living room"
            />
          )}
        />
        <Route
          path="/control-panel/kitchen"
          exact
          render={() => (
            <ControlPanelRoomPage
              url="/control-panel/kitchen"
              roomName="Kitchen"
            />
          )}
        />
        <Route
          path="/control-panel/bedroom1"
          exact
          render={() => (
            <ControlPanelRoomPage
              url="/control-panel/bedroom1"
              roomName="Bedroom 1"
            />
          )}
        />
        <Route
          path="/control-panel/bedroom2"
          exact
          render={() => (
            <ControlPanelRoomPage
              url="/control-panel/bedroom2"
              roomName="Bedroom 2"
            />
          )}
        />
      </Switch>
    </main>
  );
};

export default ControlPanel;
