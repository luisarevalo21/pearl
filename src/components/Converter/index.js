import React, { Component } from 'react';
import Axios from 'axios';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Dropdown from 'react-bootstrap/Dropdown'

class Converter extends Component {

    state = {
        currencyID: [],
        currencyVal: ""

    };

    componentDidMount() {

        let apiKey = '9cc6f8323af31d2f1249';

        // let fromCurrency = encodeURIComponent(fromCurrency);
        // let toCurrency = encodeURIComponent(toCurrency);
        // let query = fromCurrency + '_' + toCurrency;

        // let url = 'https://free.currconv.com/api/v7/convert?q='
        //     + query + '&compact=ultra&apiKey=' + apiKey;

        Axios.get(`https://free.currconv.com/api/v7/currencies?apiKey=${apiKey}`)
            .then(response => {
                console.log(response);
                let id = response.data.results;
                this.state.currencyID.push(id)
            })
        console.log('Currency ID:', this.state.currencyID);
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='row justify-content-sm-center mt-3'>
                <div className='col-sm-3 border border-dark rounded-lg p-2'>

                    <div className='row justify-content-sm-center'>
                        <div className='col-sm-12 text-center'>
                            <ButtonToolbar>
                                {[DropdownButton].map((DropdownType, idx) => (
                                    <DropdownType
                                        size="sm"
                                        variant="secondary"
                                        title="Drop small"
                                        id={`dropdown-button-drop-${idx}`}
                                        key={idx}
                                    >
                                        <Dropdown.Item eventKey={idx}>{this.state.currencyID[0].keys}</Dropdown.Item>
                                    </DropdownType>
                                ))}
                            </ButtonToolbar>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Converter;