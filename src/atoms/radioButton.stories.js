import React from "react";

import { RadioButton } from "./radioButton";

export default {
  title: "Design System/Atoms/radio",
  component: RadioButton,
  argTypes: {
    appearance: {
      control: { type: "select", options: ["primary", "secondary", "danger"] },
    },
    customRadio: false,
    icon: "",
    label: "",
    customRadioClass: "",
    isLoading: false,
    name: "",
  },
};

const iconSource = (
  <svg
    className=" w-4 h-4 pointer-events-none text-theme-primary"
    viewBox="0 0 172 172"
  >
    <g
      fill="none"
      strokeWidth="none"
      strokeMiterlimit="10"
      fontFamily="none"
      fontWeight="none"
      fontSize="none"
      textAnchor="none"
      className="text-primary"
    >
      <path d="M0 172V0h172v172z" />
      <path
        d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
        fill="currentColor"
        className="text-primary"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export const radio = (args, args2, args3) => {
  return (
    <>
      <RadioButton {...args} />
      <RadioButton {...args} />
      <RadioButton {...args} />
    </>
  );
};

radio.args = {
  appearance: "primary",
  isLoading: false,
  id: "radio",
  label: "This is a sample Radio Button.",
  customRadio: false,
  icon: iconSource,
  name: "radio",
  customRadioClass:
    "bg-white border border-theme-primary rounded-full shadow w-5 h-5 p-2 flex justify-center items-center mr-2",
};
