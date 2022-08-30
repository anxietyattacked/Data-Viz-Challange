import { useEffect, useState } from "react";

import * as api from "../api";
import ControlPanel from "./ControlPanel";
import Viz from "./Viz";
import Citation from "./Citation";
import cleanData from "./cleanData";
import "./App.css";
export default function App() {
  const [data, setData] = useState();
  const [sex, setSex] = useState("Females");
  const [year, setYear] = useState(2017);

  useEffect(() => {
    async function fetchData() {
      const metadata = await api.fetchMetadata();
      const citation = await api.fetchCitation();
      const fetchData = await api.fetchData({
        year_name: [year],
        sex_name: [sex],
      });
      console.log({ metadata, citation, fetchData });

      const cleanedData = cleanData(fetchData);
      setData(cleanedData);
    }
    fetchData();
  }, [sex, year]);

  return (
    <div className="App">
      <div className="viz-container">
        <h2>Global Opioid Use Death Rates</h2>

        <Viz data={data} />
      </div>
      <div className="control-container">
        <ControlPanel sex={sex} setSex={setSex} year={year} setYear={setYear} />
      </div>
      <Citation />
    </div>
  );
}
