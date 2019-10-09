import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title/Title";
import Converter from "./containers/Converter/Converter";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function App() {
  return (
    <>
      <Title />
      <Tabs defaultActiveKey="summer">
        <Tab eventKey="summer" title="Summer">
          <Converter conversionValue="1.6" />
        </Tab>
        <Tab eventKey="winter" title="Winter">
          <Converter conversionValue="2.14" />
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
