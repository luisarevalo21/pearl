import React from "react";
import Navbar from "react-bootstrap/Navbar";

const title = () => {
  return (
    <>
      <Navbar
        className="row text-white"
        expand="lg"
        bg="secondary"
        variant="secondary"
      >
        <div className="col-md-12 text-center">
          <Navbar.Brand className="" style={{ fontFamily: "", fontSize: "" }}>
            Tomorrowland Pearl Converter
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
};

export default title;
