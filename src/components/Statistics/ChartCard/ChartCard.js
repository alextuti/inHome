import React from "react";
import { Bar } from "react-chartjs-2";

import classes from "./ChartCard.module.scss";

const ChartCard = props => {
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: props.label,
        data: props.data,
        backgroundColor: "#000000"
      }
    ]
  };

  return (
    <section className={classes.ChartCard}>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          },
          title: {
            display: true,
            text: props.title,
            fontSize: 16,
            fontFamily: "Helvetica"
          }
        }}
      />
    </section>
  );
};

export default ChartCard;
