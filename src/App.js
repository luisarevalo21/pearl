import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title/Title";
import Converter from "./containers/Converter/Converter";

function App() {
  return (
    <>
      <Title />
      <Converter />
    </>
  );
}

export default App;
