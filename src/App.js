import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Statistics from "./components/Statistics/Statistics";
import Settings from "./components/Settings/Settings";
import FAQ from "./components/FAQ/FAQ";

import classes from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <header className={classes.App__Header}>
          <h1>inHome</h1>
        </header>
        <NavigationBar />
        <Switch>
          <Route path="/control-panel" component={ControlPanel} />
          <Route path="/settings" component={Settings} />
          <Route path="/statistics" component={Statistics} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </div>
      <div className={classes.RotateDevice}>
        <h1>Please rotate your device!</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
