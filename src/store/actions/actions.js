import axios from "axios";

export const INCREMENT_CURRENCY = "INCREMENT_CURRENCY";
export const SELECTED_CURRENCY = "SELECTED_CURRENCY";
export const FETCH_CURRENCY_VALUES = "FETCH_CURRENCY_VALUES";
export const STORE_FETCHED_VALUES = "STORE_FETCHED_VALUES";

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

export const storeFetchedValues = values => {
  return {
    type: STORE_FETCHED_VALUES,
    values: values
  };
};

export const fetchingCurrencyValues = data => {
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

        dispatch(selectedCurrency(currencyNamesArray));
      });
  };
};
