import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import ImageViewer from "../templates/image-viewer/Image-viewer";
import cat from "./assets/main-coon.jpg";
import timeline from "./assets/timeline.png";
import { sunTheme, greenTheme } from "../constants/themes";

const meta = {
  title: "components/Image-Viewer",
  component: ImageViewer,
} satisfies Meta<typeof ImageViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CatImage: Story = {
  args: {
    image: cat,
    title: "MAPC CAT",
    alt: "Picture of Regal Cat",
    file: cat,
    theme: sunTheme,
  },
};

const title: React.ReactNode = (
  <>
    <span style={{ fontSize: "2.35rem", fontStyle: "italic" }}>60</span>
    <span style={{ verticalAlign: "super", fontStyle: "italic" }}>th</span> ANNIVERSARY TIMELINE
  </>
);

// template accepts custome titles
export const CustomTitleTimeline: Story = {
  args: {
    image: timeline,
    title: title,
    alt: "60th Anniversary MAPC Timeline",
    file: timeline,
    theme: greenTheme,
  },
};
