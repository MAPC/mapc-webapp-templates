import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import Map from "../templates/d3-map/Map";

import munidata from "../data/ma-munis.json";
import { munis } from "../constants/muni";

import "bootstrap/dist/css/bootstrap.min.css";

import { sunTheme, greenTheme, skyTheme } from "../constants/themes";

const meta = {
  title: "components/Map",
  component: Map,
} satisfies Meta<typeof Map>;

export default meta;
type Story = StoryObj<typeof meta>;

interface MapObject {
  [key: string]: any;
}

const data: MapObject = munidata;

export const MapOrange: Story = {
  args: {
    data: data["features"],
    munis: munis,
    theme: sunTheme,
  },
};
export const MapSky: Story = {
  args: {
    data: data["features"],
    munis: munis,
    theme: skyTheme,
  },
};
