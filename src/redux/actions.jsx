export const addNumber = (number) => ({
  type: "number",
  payload: number,
});

export const addOperator = (operator) => ({
  type: "operator",
  payload: operator,
});

export const addResult = () => ({
  type: "result",
});
