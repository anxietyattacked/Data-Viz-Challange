import React from "react";

const Citation = () => {
  return (
    <div className="citation-container">
      <p>Global Burden of Disease Collaborative Network.</p>
      <p>Global Burden of Disease Study 2017 (GBD 2017) Results.</p>
      <p>
        Seattle, United States: Institute for Health Metrics and Evaluation
        (IHME), 2018.
      </p>
      <p>
        Available from{" "}
        {
          <a href="http://ghdx.healthdata.org/gbd-results-tool">
            http://ghdx.healthdata.org/gbd-results-tool
          </a>
        }
        .
      </p>
      <p>
        Permalink to opioid use disorder data:{" "}
        {
          <a href="http://ghdx.healthdata.org/gbd-results-tool?params=gbd-api-2017-permalink/c12b65baf872c661f4640bb583320b4e">
            http://ghdx.healthdata.org/gbd-results-tool?params=gbd-api-2017-permalink/c12b65baf872c661f4640bb583320b4e
          </a>
        }
      </p>
      <p>Data Definitions:</p>
      <p>
        - Mean: This is the mean death rate (number of deaths per 100,000
        people) due to opioid use disorders for a given location, sex, and year.
      </p>
      <p>- Upper: This is the upper bound of uncertainty for the mean</p>
      <p>- Lower: This is the lower bound of uncertainty for the mean</p>
    </div>
  );
};

export default Citation;
