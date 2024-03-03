import { useDispatch, useSelector } from "react-redux";

import { addClear, addNumber, addOperator, addResult } from "../redux/actions";

const CalculatorGrid = () => {
  const currentValue = useSelector((state) => state.currentValue);
  const dispatch = useDispatch();

  function handleNumber(number) {
    dispatch(addNumber(number));
  }

  function handleOperator(operator) {
    dispatch(addOperator(operator));
  }

  function handleResult() {
    dispatch(addResult());
  }

  function handleClear() {
    dispatch(addClear());
  }

  return (
    <div className="calculator">
      <input type="text" value={currentValue} readOnly />
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClear()}>CLEAR</button>
          <button>DEL</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumber(1)}>1</button>
          <button onClick={() => handleNumber(2)}>2</button>
          <button onClick={() => handleNumber(3)}>3</button>
          <button onClick={() => handleOperator("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumber(4)}>4</button>
          <button onClick={() => handleNumber(5)}>5</button>
          <button onClick={() => handleNumber(6)}>6</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumber(7)}>7</button>
          <button onClick={() => handleNumber(8)}>8</button>
          <button onClick={() => handleNumber(9)}>9</button>
          <button onClick={() => handleOperator("-")}>-</button>
        </div>
        <div className="row">
          <button>.</button>
          <button onClick={() => handleNumber(0)}>0</button>
          <button onClick={() => handleResult("=")}>=</button>
        </div>
      </div>
    </div>
  );
};
export default CalculatorGrid;
