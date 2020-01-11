import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar";

import classes from "./App.module.scss";
import ControlPanel from "./components/ControlPanel/ControlPanel";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <NavigationBar />
        <Switch>
          <Route path="/" exact render={() => <h1>Home</h1>} />
          <Route path="/control-panel" component={ControlPanel} />
          <Route path="/settings" render={() => <h1>Something1</h1>} />
          <Route path="/statistics" render={() => <h1>Something2</h1>} />
          <Route path="/media" render={() => <h1>Something3</h1>} />
          <Route path="/help" render={() => <h1>Something4</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
