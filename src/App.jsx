import CalculatorGrid from "./components/CalculatorGrid";
import CalculatorHistory from "./components/CalculatorHistory";
import CurrentInput from "./components/CurrentInput";
import PreviousInput from "./components/PreviousInput";

function App() {
  return (
    <>
      <CalculatorHistory />
      <PreviousInput />
      <CurrentInput />
      <CalculatorGrid />
    </>
  );
}

export default App;
