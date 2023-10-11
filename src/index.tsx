import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { munis } from "./constants/muni";
import reportWebVitals from "./reportWebVitals";
import munidata from "./data/ma-munis.json";

import "bootstrap/dist/css/bootstrap.min.css";

// templates
import Map from "./templates/d3-map/Map";
import ImageViewer from "./templates/image-viewer/Image-viewer";
import Login from "./templates/login-page/Login";

import cat from "./templates/image-viewer/main-coon.jpg";
import timeline from "./templates/image-viewer/timeline.png";

interface MapObject {
  [key: string]: any;
}

const sunTheme = {
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

const skyTheme = {
  backgroundColor: "#F2F5FF",
  primaryColor: "#8ACCFF",
  secondaryColor: "#0063E6",
  tertiaryColor: "#00256E",
};

const data: MapObject = munidata;

const title: React.ReactNode = (
  <>
    <span style={{ fontSize: "42px", fontStyle: "italic" }}>60</span>
    <span style={{ verticalAlign: "super", fontStyle: "italic" }}>th</span> ANNIVERSARY TIMELINE
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      {/* <Map data={data["features"]} munis={munis} theme={colors} /> */}
      {/* <ImageViewer image={cat} title={"MAPC CAT"} alt={"photo of cat"} theme={sunTheme} /> */}
      {/* <ImageViewer image={timeline} title={title} alt={"MAPC 60th timeline"} theme={greenTheme} /> */}
      <Login loggedIn theme={skyTheme} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
