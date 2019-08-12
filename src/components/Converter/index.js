import React, { Component } from 'react';
import Axios from 'axios';

class Converter extends Component {

    state = {
        currencyType: "",
        currencyVal: ""

    };

    componentDidMount() {

        this.convertCurrency(10, 'USD', 'PHP', (err, amount) => {
            console.log(amount);
          });

    }

    convertCurrency(amount, fromCurrency, toCurrency, cb) {
        var apiKey = '9cc6f8323af31d2f1249';

        fromCurrency = encodeURIComponent(fromCurrency);
        toCurrency = encodeURIComponent(toCurrency);
        var query = fromCurrency + '_' + toCurrency;

        var url = 'https://free.currconv.com/api/v7/convert?q='
            + query + '&compact=ultra&apiKey=' + apiKey;

        Axios.get(url, function (res) {
            var body = '';

            res.on('data', function (chunk) {
                body += chunk;
            });

            res.on('end', function () {
                try {
                    var jsonObj = JSON.parse(body);

                    var val = jsonObj[query];
                    if (val) {
                        var total = val * amount;
                        cb(null, Math.round(total * 100) / 100);
                    } else {
                        var err = new Error("Value not found for " + query);
                        console.log(err);
                        cb(err);
                    }
                } catch (e) {
                    console.log("Parse error: ", e);
                    cb(e);
                }
            });
        })
        // .on('error', function (e) {
        //     console.log("Got an error: ", e);
        //     cb(e);
        // });
    }

    handleSubmit = () => {

    }

    render() {
        return (
            <div className='row justify-content-sm-center mt-3'>
                <div className='col-sm-3 border border-dark rounded-lg p-2'>

                    <div className='row justify-content-sm-center'>
                        <div className='col-sm-12 text-center'>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Converter;