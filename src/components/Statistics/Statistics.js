import React from "react";
import ChartCard from "./ChartCard/ChartCard";

import classes from "./Statistics.module.scss";

const Statistics = () => {
  return (
    <main className={classes.Statistics}>
      <ChartCard
        title="Electricity consumption"
        label="kWh"
        data={["450", "620", "500", "550"]}
      />
      <ChartCard
        title="Water consumption"
        label="m3"
        data={["15", "12", "20", "17"]}
      />
      <ChartCard
        title="Utilities cost"
        label="€"
        data={["120", "130", "135", "125"]}
      />
    </main>
  );
};

export default Statistics;
