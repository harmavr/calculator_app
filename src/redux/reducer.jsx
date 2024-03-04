const initialState = {
  currentValue: "0",
  operator: "",
  previousValue: null,
  calculations: "",
};

const reducer = (state = initialState, action) => {
  if (action.type === "number") {
    return {
      ...state,
      currentValue:
        state.currentValue === "0"
          ? action.payload
          : state.currentValue + action.payload,
    };
  } else if (action.type === "operator") {
    return {
      ...state,
      operator: action.payload,
      previousValue: state.currentValue,
      currentValue: "0",
    };
  } else if (action.type === "result") {
    let result;
    const curValue = parseFloat(state.currentValue);
    const prevValue = parseFloat(state.previousValue);
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
    const prevCalculation = `${state.previousValue} ${state.operator} ${state.currentValue} = ${result}`;
    return {
      ...state,
      currentValue: "0",
      operator: "",
      previousValue: "0",
      calculations: prevCalculation,
    };
  } else if (action.type === "delete") {
    return {
      ...state,
      operator: null,
      currentValue:
        state.currentValue.length - 1 === 0
          ? "0"
          : state.currentValue.slice(0, state.currentValue.length - 1),
    };
  } else if (action.type === "clear") {
    return {
      ...state,
      operator: null,
      currentValue: "0",
    };
  } else return state;
};

export default reducer;
