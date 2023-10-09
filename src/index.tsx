import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { munis } from "./constants/muni";
import Map from "./Map";
import reportWebVitals from "./reportWebVitals";
import munidata from "./data/ma-munis.json";

interface MapObject {
  [key: string]: any;
}

const colors = {
  backgroundColor: "#FCF8ED",
  primaryColor: "#FFB624",
  secondaryColor: "#DB9E00",
  tertiaryColor: "#3D2A08",
};

const greenTheme = {
  backgroundColor: "#ECFFFA",
  primaryColor: "#00F099",
  secondaryColor: "#00BF64",
  tertiaryColor: "#006E47",
};
const data: MapObject = munidata;

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div style={{ width: "100vw", height: "100vh" }}>
      <Map data={data["features"]} munis={munis} theme={colors} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
