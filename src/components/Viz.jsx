import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import Choropleth from "./Choropleth";
import Legend from "./Legend";
import "./Viz.css";

export default function Viz({ data }) {
  const [world, setWorld] = useState();
  const [countries, setCountries] = useState();
  const [countrymesh, setCountrymesh] = useState();

  const legend = useRef(null);
  const legendImg = useRef(null);
  const legendTicks = useRef(null);
  const legendTitle = useRef(null);

  const viz = useRef(null);
  const vizGroup = useRef(null);

  useEffect(() => {
    const worldjson = async () => {
      await d3
        .json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json")
        .then(setWorld);
    };
    worldjson();
  }, []);

  useEffect(() => {
    if (world) {
      setCountries(topojson.feature(world, world.objects.countries));
      setCountrymesh(
        topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
      );
    }
  }, [world]);

  useEffect(() => {
    if (data && world) {
      const chart = Choropleth(data, {
        id: (d) => d.location_name,
        value: (d) => d.mean,
        range: d3.interpolateYlOrRd,
        width: 840,
        features: countries,
        featureId: (d) => d.properties.name,
        title: (f, d) =>
          `${f.properties.name} \nMean: ${d?.mean.toFixed(
            2
          )}\nLower Bound: ${d?.lower.toFixed(
            2
          )} \nUpper Bound: ${d?.upper.toFixed(2)}`,
        borders: countrymesh,
        projection: d3.geoEquirectangular(),
        stroke: "black",
        strokeWidth: ".4px",
        viz: viz,
        vizGroup: vizGroup,
      });

      Legend(chart.scales.color, {
        title: "Opioid Deaths Per 100,000 People",
        legend: legend,
        legendImg: legendImg,
        legendTicks: legendTicks,
        legendTitle: legendTitle,
      });
    }
  }, [data, countries, countrymesh, world]);

  return data && world ? (
    <main className="viz">
      <svg ref={legend}>
        <image src="" alt="" ref={legendImg} />
        <g ref={legendTicks}>
          <text ref={legendTitle}></text>
        </g>
      </svg>
      <svg ref={viz}>
        <g ref={vizGroup}></g>
      </svg>
    </main>
  ) : (
    <div>Loading</div>
  );
}
