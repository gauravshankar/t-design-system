import React from "react";
import { Alert } from "./alerts";

export default {
  title: "Design System/Molecules/Alerts",
  component: Alert,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["danger", "warning", "success", "info"],
      },
    },
    message: "",
    floating: false,
    showClose: false
  },
};

export const Error = (args) => <Alert {...args} />;
Error.args = {
  type: "danger",
  message: "This alert shows Error message",
  floating: false,
  showClose: false
};

export const Warning = (args) => <Alert {...args} />;
Warning.args = {
  type: "warning",
  message: "This alert shows Warning message",
  floating: false,
  showClose: false,
};

export const Success = (args) => <Alert {...args} />;
Success.args = {
  type: "success",
  message: "This alert shows Success message",
  floating: false,
  showClose: false
};

export const Info = (args) => <Alert {...args} />;
Info.args = {
  type: "info",
  message: "This alert shows Info message",
  floating: false,
  showClose: false
};
