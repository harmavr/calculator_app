const initialState = {
  currentValue: 0,
  operator: "",
  previousValue: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "number") {
    return {
      ...state,
      currentValue:
        state.currentValue === 0
          ? action.payload
          : state.currentValue + action.payload,
    };
  } else if (action.type === "operator") {
    return {
      ...state,
      operator: action.payload,
      previousValue: state.currentValue,
      currentValue: 0,
    };
  } else if (action.type === "result") {
    let result;
    const curValue = state.currentValue;
    const prevValue = state.previousValue;
    if (state.operator === "+") {
      result = prevValue + curValue;
    } else if (state.operator === "-") {
      result = prevValue - curValue;
    } else if (state.operator === "*") {
      result = prevValue * curValue;
    } else if (state.operator === "/") {
      result = prevValue / curValue;
    } else {
      result = curValue;
    }
    return {
      ...state,
      currentValue: result,
      operator: "",
      previousValue: 0,
    };
  } else return state;
};

export default reducer;
