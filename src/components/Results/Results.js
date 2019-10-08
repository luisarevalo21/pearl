import React from "react";
import classes from "./Results.module.css";
const results = props => {
  return (
    <div className={classes.Results}>
      <p>{props.pearls} Ƥ</p>
      <p>{props.euros} €</p>
      <p>{props.currentCurrency}</p>
    </div>
  );
};

export default results;
