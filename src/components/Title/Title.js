import React from "react";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Navbar.module.css";
const title = () => {
  return (
    <>
      <Navbar
        // className="row text-white"
        // expand="lg"
        // bg="secondary"
        // variant="secondary"
        className={classes.Navbar}
      >
        {/* <div className="col-md-12 text-center"> */}
        <Navbar.Brand className={classes.Title}>
          Tomorrowland Pearl Converter
        </Navbar.Brand>
        {/* </div> */}
      </Navbar>
    </>
  );
};

export default title;
