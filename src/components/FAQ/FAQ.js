import React from "react";
import FAQElement from "./FAQElement/FAQElement";

import data from "./FAQ.json";
import classes from "./FAQ.module.scss";

const FAQ = () => {
  return (
    <main className={classes.FAQ}>
      {data.map((element, index) => {
        return (
          <FAQElement summary={element.summary} key={index + "FAQElement"}>
            {element.details}
          </FAQElement>
        );
      })}
    </main>
  );
};

export default FAQ;
