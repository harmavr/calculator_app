import CalculatorGrid from "./components/CalculatorGrid";
import CurrentInput from "./components/CurrentInput";
import PreviousInput from "./components/PreviousInput";

function App() {
  return (
    <>
      <PreviousInput />
      <CurrentInput />
      <CalculatorGrid />
    </>
  );
}

export default App;
