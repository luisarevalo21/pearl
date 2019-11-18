import axios from "axios";

export const INCREMENT_CURRENCY = "INCREMENT_CURRENCY";
export const SELECTED_CURRENCY = "SELECTED_CURRENCY";
export const FETCH_CURRENCY_VALUES = "FETCH_CURRENCY_VALUES";
export const STORE_FETCHED_VALUES = "STORE_FETCHED_VALUES";
export const CONVERSION = "CONVERSION";
export const CLEARSTATE = "CLEARSTATE";

export const incrementCurrency = value => {
  return {
    type: INCREMENT_CURRENCY,
    value: value
  };
};

export const selectedCurrency = value => {
  return {
    type: SELECTED_CURRENCY,
    option: value
  };
};

export const storeFetchedValues = value => {
  // console.log("the values are ", value);

  return {
    type: STORE_FETCHED_VALUES,
    options: value
  };
};

export const conversion = (convertedToEuro, convertedToPearls) => {
  return {
    type: CONVERSION,
    euroConversaion: convertedToEuro.toFixed(2),
    pearlsConversion: convertedToPearls.toFixed(2)
  };
};

export const fetchConversionValue = (
  currencyValue,
  selectedCurrency,
  pearlConversionValue
) => {
  if (currencyValue !== null && selectedCurrency !== "") {
    // console.log(currencyValue, selectedCurrency.value);
    const query = selectedCurrency.value + "_" + "EUR";

    return dispatch => {
      axios
        .get(
          "https://free.currconv.com/api/v7/convert?q=" +
            query +
            "&compact=ultra&apiKey=9cc6f8323af31d2f1249"
        )
        .then(response => {
          const conversation = response.data[query];
          const convertedToEuro = currencyValue * conversation;
          const convertedToPearls = convertedToEuro / pearlConversionValue;
          // console.log("converted to pear;s", convertedToPearls);
          dispatch(conversion(convertedToEuro, convertedToPearls));
        });
    };
  }
};

export const fetchingCurrencyValues = () => {
  return dispatch => {
    axios
      .get(
        "https://free.currconv.com/api/v7/currencies?apiKey=9cc6f8323af31d2f1249"
      )
      .then(response => {
        const currencyNamesArray = Object.keys(response.data.results)
          .map(element => {
            return {
              value: element,
              label: element
            };
          })
          .filter(element => element.value !== "EUR");

        // console.log("the names array is", currencyNamesArray);

        dispatch(storeFetchedValues(currencyNamesArray));
      });
  };
};

export const clearState = () => {
  console.log("clear state was triggered");
  return {
    type: CLEARSTATE
  };
};
