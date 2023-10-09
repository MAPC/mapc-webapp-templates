import React, { useEffect, useCallback, useState } from "react";
import { ExtendedFeature } from "d3";
import * as d3 from "d3";
import styled from "styled-components";
import { Set } from "typescript";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => (props.theme.backgroundColor !== undefined ? props.theme.backgroundColor : "black")};
`;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

interface theme {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

interface props {
  data: ExtendedFeature[];
  munis: Set<String>;
  theme?: theme;
}

function Map({ data, munis, theme }: props) {
  const [selectedMuni, setSelectedMuni] = useState("N/A");
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    // handle screen resolution changes
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // define different map projections (zoom levels) for different screen resolutions
  let projection = d3
    .geoAlbers()
    .scale(
      windowDimensions["height"] > 1300 && windowDimensions["width"] > 1400
        ? 68000
        : windowDimensions["width"] > 1200 && windowDimensions["height"] > 780
        ? 54000
        : windowDimensions["width"] > 1000 && windowDimensions["height"] > 600
        ? 45000
        : windowDimensions["width"] > 650 && windowDimensions["height"] > 500
        ? 35000
        : 27000
    )
    .rotate([71.057, 0])
    .center([-0.021, 42.378])
    .translate([
      windowDimensions["width"] < 505 ? windowDimensions["width"] / 1.95 : windowDimensions["width"] / 2.5,
      windowDimensions["height"] / 2,
    ]);

  const aspect = windowDimensions["width"] / windowDimensions["height"];
  const adjustedHeight = Math.ceil(windowDimensions["width"] / aspect);

  const initMap: Function = useCallback(() => {
    // initialize map rendering, render full Massachusetts geo data but highlight MAPC region
    const emojiMap = d3.select("#map-g");
    const path = d3.geoPath().projection(projection);

    emojiMap.selectAll("path").remove();

    emojiMap
      .attr("class", "munis")
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("fill", (d) => {
        // function for determining color of geometries
        if (d.properties !== null) {
          if (munis.has(d.properties.town[0] + d.properties.town.slice(1, d.properties.town.length).toLowerCase())) {
            return theme?.primaryColor !== undefined ? theme?.primaryColor : "#bad7f7";
          } else {
            return theme?.secondaryColor !== undefined ? theme?.secondaryColor : "rgb(32,59,77)";
          }
        } else {
          return "#ffffff";
        }
      })
      .attr("stroke", theme?.tertiaryColor !== undefined ? theme?.tertiaryColor : "#5064b7")
      .attr("d", path)
      .on("mouseover", function (d) {
        // function for mouseover interactions
        if (
          munis.has(
            d.target.__data__.properties.town[0].toUpperCase() +
              d.target.__data__.properties.town.slice(1, d.target.__data__.properties.town.length).toLowerCase()
          )
        ) {
          setSelectedMuni(d.target.__data__.properties.town);
          d3.select(this).attr(
            "fill",
            theme?.secondaryColor !== undefined ? theme?.secondaryColor : "rgb(255,206,134)"
          );
        }
      })
      .on("click", (d) => {
        if (
          munis.has(
            d.target.__data__.properties.town[0].toUpperCase() +
              d.target.__data__.properties.town.slice(1, d.target.__data__.properties.town.length).toLowerCase()
          )
        ) {
          setSelectedMuni(String(d.target.__data__.properties.town));
        }
      })
      .on("mouseout", function (d) {
        if (
          munis.has(
            d.target.__data__.properties.town[0].toUpperCase() +
              d.target.__data__.properties.town.slice(1, d.target.__data__.properties.town.length).toLowerCase()
          )
        ) {
          setSelectedMuni("N/A");
          d3.select(this).attr("fill", theme?.primaryColor !== undefined ? theme?.primaryColor : "#bad7f7");
        }
      });
  }, [data, munis, projection]);

  useEffect(() => {
    initMap();
  }, [data, initMap]);

  return (
    <MapContainer theme={theme}>
      <svg
        style={{ overflow: "visible", display: "block", margin: "auto" }}
        className={"emoji-map"}
        preserveAspectRatio={"xMinYMin slice"}
        viewBox={`0 0 ${windowDimensions["width"]} ${adjustedHeight}`}
      >
        <g id={"map-g"} />
      </svg>
    </MapContainer>
  );
}

export default Map;
