import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./store/actions/actions";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Title from "./components/Title/Title";
import Converter from "./containers/Converter/Converter";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class App extends Component {
  componentDidUpdate() {
    console.log("componet updated");
  }
  changed = () => {
    console.log("changed");
  };
  render() {
    return (
      <>
        <Title />
        <Tabs
          defaultActiveKey="summer"
          className="Tab"
          // onSelect={() => actionCreators.clearState()}
        >
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
}

// const mapDispatchToProps = dispatch => {
//   return {
//     clearState: dispatch(() => actionCreators.clearState())
//   };
// };

export default App;
