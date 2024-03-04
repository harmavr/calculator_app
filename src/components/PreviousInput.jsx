import { useSelector } from "react-redux";

export default function PreviousInput() {
  const prevInput = useSelector((state) => state.calculations);

  return (
    <div className="prev-calculation">
      <input type="text" value={prevInput} readOnly />
    </div>
  );
}
