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

export const addClear = () => ({
  type: "clear",
});

export const addDelete = () => ({
  type: "delete",
});

export const addComma = () => ({
  type: "comma",
});
