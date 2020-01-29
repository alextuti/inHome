import React from "react";

import classes from "./FAQElement.module.scss";

const FAQElement = props => {
  return (
    <details className={classes.FAQElement}>
      <summary className={classes.FAQElement__Summary}>{props.summary}</summary>
      <p className={classes.FAQElement__Details}>{props.children}</p>
    </details>
  );
};

export default FAQElement;
