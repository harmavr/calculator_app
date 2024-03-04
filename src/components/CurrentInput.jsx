import { useDispatch, useSelector } from "react-redux";

export default function CurrentInput() {
  const currentValue = useSelector((state) => state.currentValue);

  return (
    <div className="currentInput">
      <input type="text" value={currentValue} readOnly />
    </div>
  );
}
