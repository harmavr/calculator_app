import { useDispatch, useSelector } from "react-redux";

import {
  addClear,
  addComma,
  addDelete,
  addNumber,
  addOperator,
  addResult,
} from "../redux/actions";

const CalculatorGrid = () => {
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

  function handleDelete() {
    dispatch(addDelete());
  }

  function handleComma() {
    dispatch(addComma());
  }

  return (
    <div className="calculator">
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleClear()}>CLEAR</button>
          <button onClick={() => handleDelete()}>DEL</button>
          <button onClick={() => handleOperator("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumber("1")}>1</button>
          <button onClick={() => handleNumber("2")}>2</button>
          <button onClick={() => handleNumber("3")}>3</button>
          <button onClick={() => handleOperator("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumber("4")}>4</button>
          <button onClick={() => handleNumber("5")}>5</button>
          <button onClick={() => handleNumber("6")}>6</button>
          <button onClick={() => handleOperator("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumber("7")}>7</button>
          <button onClick={() => handleNumber("8")}>8</button>
          <button onClick={() => handleNumber("9")}>9</button>
          <button onClick={() => handleOperator("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleComma()}>.</button>
          <button onClick={() => handleNumber("0")}>0</button>
          <button onClick={() => handleResult()}>=</button>
        </div>
      </div>
    </div>
  );
};
export default CalculatorGrid;
