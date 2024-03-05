import { useSelector } from "react-redux";

export default function CalculatorHistory() {
  const calcArray = useSelector((state) => state.calculationsArray);
  console.log(calcArray);

  return (
    <div className="history">
      {calcArray ? (
        <ul>
          {calcArray.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      ) : (
        <p>No calculations available</p>
      )}
    </div>
  );
}
