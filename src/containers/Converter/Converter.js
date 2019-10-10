import React, { Component } from "react";
import axios from "axios";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownMenu from 'react-bootstrap/DropdownMenu';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import classes from "./Converter.module.css";
import Select from "react-select";
import Results from "../../components/Results/Results";
class Converter extends Component {
  state = {
    options: [],
    currentValue: "",
    currencyVal: 0,
    pearlsConversion: 0,
    euroConversaion: 0,
    apiKey: "9cc6f8323af31d2f1249",
    conversionValue: 0
  };

  componentDidMount() {
    // let apiKey = "9cc6f8323af31d2f1249";

    // let fromCurrency = encodeURIComponent(fromCurrency);
    // let toCurrency = encodeURIComponent(toCurrency);
    // let query = fromCurrency + '_' + toCurrency;

    // let url = 'https://free.currconv.com/api/v7/convert?q='
    //     + query + '&compact=ultra&apiKey=' + apiKey;

    //remove the euro from the list or do something about it.
    axios
      .get(
        `https://free.currconv.com/api/v7/currencies?apiKey=${this.state.apiKey}`
      )
      .then(response => {
        console.log(response);
        const currencyNamesArray = Object.keys(response.data.results)
          .map(element => {
            return {
              value: element,
              label: element
            };
          })
          .filter(element => element.value !== "EUR");

        // const array = currencyValue.map(element => {
        //   return {
        //     value: element,
        //     label: element
        //   };
        // });
        // console.log(currencyValue);

        // const array =

        //   .currencyID.push(id);
        this.setState({
          options: currencyNamesArray,
          conversionValue: this.props.conversionValue
        });
      });
    // console.log("Currency ID:", this.state.currencyID);
  }

  handleChange = option => {
    this.setState({ currentValue: option });
  };
  handleInput = event => {
    // if (event.target.value > 0) {
    this.setState({ currencyVal: Math.abs(event.target.value) });
  };

  conversation = (currencyVal, currency) => {
    // console.log("inside the converdation");

    if (currencyVal !== null && currency !== "") {
      const query = currency.value + "_" + "EUR";
      axios
        .get(
          "https://free.currconv.com/api/v7/convert?q=" +
            query +
            "&compact=ultra&apiKey=" +
            this.state.apiKey
        )
        .then(response => {
          const conversation = response.data[query];
          const convertedToEuro = currencyVal * conversation;
          console.log(convertedToEuro);
          const convertedToPearls =
            convertedToEuro / this.state.conversionValue;
          console.log(convertedToPearls);

          this.setState({
            pearlsConversion: convertedToPearls.toFixed(2),
            euroConversaion: convertedToEuro.toFixed(2)
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    // console.log(conversation);
  };
  render() {
    console.log(this.state);

    // if (this.state.currencyVal && this.state.currentValue) {
    //   this.conversation(this.state.currencyVal, this.state.currentValue);
    // }

    return (
      // <Tabs>
      //   <Tab eventKey="summer" title="Summer">
      <div className={classes.Converter}>
        <p> Logo will go here</p>
        <p> 1 Pearl = {this.props.conversionValue} Euro</p>
        <Select
          value={this.state.currentValue}
          onChange={this.handleChange}
          options={this.state.options}
          className={classes.Select}
          // styles={{ height: "50px" }}
        />
        <input
          placeholder="0.00"
          type="number"
          onChange={this.handleInput}
          className={classes.Input}
        />

        <button
          onClick={() =>
            this.conversation(this.state.currencyVal, this.state.currentValue)
          }
          className={classes.Button}
        >
          Convert
        </button>

        <Results
          pearls={this.state.pearlsConversion}
          euros={this.state.euroConversaion}
          currentCurrency={this.state.currencyVal}
          currencyName={this.state.currentValue.value}
        />
      </div>
      // </Tab>

      // <Tab eventKey="winter" title="Winter"></Tab>
      //{/* //   <div className="row justify-content-sm-center mt-3">
      //     <div className="col-sm-3 border border-dark rounded-lg p-2">
      //       <div className="row justify-content-sm-center">
      //         <div className="col-sm-12 text-center"> */}
      // </Tabs>
    );
  }
}

{
  /* <DropdownButton id="dropdown-item-button " title="select one">
          {this.state.currencyID.map(value => (
            <Dropdown.Item as="button" key={value}>
              {value}
            </Dropdown.Item>
          ))}
          {/* <Dropdown.Item as="button">{this.state.currencyID}</Dropdown.Item> */
}
{
  /* </DropdownButton>  */
}

export default Converter;
