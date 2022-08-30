import { useCallback } from "react";

import { SexControl, YearControl } from "./controls";

import "./ControlPanel.css";

export default function ControlPanel({ sex, setSex, year, setYear }) {
  const handleSexChange = useCallback(
    (nextValue) => {
      setSex(nextValue);
    },
    [setSex]
  );

  const handleYearChange = useCallback(
    (nextValue) => {
      setYear(parseInt(nextValue));
    },
    [setYear]
  );

  return (
    <div className="control-panel">
      <SexControl value={sex} onChange={handleSexChange} />
      <YearControl
        max={2017}
        min={1990}
        value={year}
        onChange={handleYearChange}
      />
    </div>
  );
}
