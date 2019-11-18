const intialState = {
  euroConversaion: 0,
  inputedAmount: 0,
  pearlsConversion: 0,
  apiKey: "9cc6f8323af31d2f1249",
  currentValue: "",
  options: []
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREMENT_CURRENCY":
      // console.log("inside increment curency");
      return {
        ...state,
        inputedAmount: Math.abs(action.value)
      };

    case "STORE_FETCHED_VALUES":
      // console.log("the action is ", action);
      return {
        ...state,
        options: action.options
      };

    case "SELECTED_CURRENCY":
      return {
        ...state,
        currentValue: action.option
      };

    case "CONVERSION":
      return {
        ...state,
        euroConversaion: action.euroConversaion,
        pearlsConversion: action.pearlsConversion
      };

    // case "CONVERSION":
    //   return {
    //     ...state,
    //     currentValue: action.option
    //   };

    // case "FETCH_CURRENCY_VALUES":
    //   return dispatch => {
    //     dispatch(fetchingValuesStarted());
    //     axios
    //       .get(
    //         `https://free.currconv.com/api/v7/currencies?apiKey=${state.apiKey}`
    //       )
    //       .then(response => {
    //         const currencyNamesArray = Object.keys(response.data.results)
    //           .map(element => {
    //             return {
    //               value: element,
    //               label: element
    //             };
    //           })
    //           .filter(element => element.value !== "EUR");
    //         dispatch(fetchingSuccess(currencyNamesArray));
    //       });
    //   };
  }
  // const fetchingSuccess = currencyNamesArray => ({
  //   ...state,
  //   options: currencyNamesArray
  // });

  // if (action.type === "INCREMENT") {
  //   return {
  //     ...state,
  //     counter: state.counter + 1
  //   };
  // }
  return state;
};

export default reducer;
