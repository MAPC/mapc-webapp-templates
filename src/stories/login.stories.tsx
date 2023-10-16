import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "../templates/login-page/Login";

import { sunTheme, greenTheme, skyTheme, fuchsiaTheme } from "../constants/themes";

const meta = {
  title: "components/Login",
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginGreen: Story = {
  args: {
    loggedIn: false,
    theme: greenTheme,
  },
};
export const LoginFuschia: Story = {
  args: {
    loggedIn: false,
    theme: fuchsiaTheme,
  },
};
