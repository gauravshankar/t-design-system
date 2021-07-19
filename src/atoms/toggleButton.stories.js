import React from "react";

import { ToggleButton } from "./toggleButton";

export default {
  title: "Design System/Atoms/toggleButton",
  component: ToggleButton,
  argTypes: {
    appearance: {
      control: { type: "select", options: ["primary", "secondary", "danger", "gray"] },
    },
    barColor: {
      control: { type: "select", options: ["primary", "secondary", "danger", "gray"] },
    },
    label: "",
    isLoading: false,
  },
};

export const Toggle = (args) => <ToggleButton {...args} />;

Toggle.args = {
  appearance: "primary",
  barColor: "gray",
  isLoading: false,
  id: "toggle",
  label: "This is a toggle button.",
  };
