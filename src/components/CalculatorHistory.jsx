import { useState } from "react";
import { useSelector } from "react-redux";

export default function CalculatorHistory() {
  const calcArray = useSelector((state) => state.calculationsArray);
  const [showHistory, setShowHistory] = useState(false);

  function handleButtonClicked() {
    setShowHistory(!showHistory);
  }

  return (
    <div className="history">
      <button onClick={handleButtonClicked}>Show History</button>
      {showHistory && (
        <div>
          {calcArray.length > 0 ? (
            <ul>
              {calcArray.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          ) : (
            <p>No calculations available</p>
          )}
        </div>
      )}
    </div>
  );
}
