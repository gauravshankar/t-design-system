import React from "react";
import { UserCircleIcon } from "@heroicons/react/outline";
import { Dropdown } from "./dropdown";

export default {
  title: "Design System/Molecules/dropdown",
  component: Dropdown,
  argTypes: {
    ClassName: "",
    title: "",
    menu: "",
    image: "",
    showImage: false,
    menuBg: {
      control: {
        type: "select",
        options: ["danger", "warning", "success", "info", "dark", "white"],
      },
    },
    menuColor: {
      control: {
        type: "select",
        options: ["danger", "warning", "success", "info", "dark", "white"],
      },
    },
  },
};

const dropdownMenu = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const dropdownImage = () => {
  return <UserCircleIcon className="h-6 w-6" aria-hidden="true" />;
};

export const dropdown = (args) => (
  <Dropdown {...args} />
);

dropdown.args = {
  ClassName: "",
  title: "Dropdown",
  menu: dropdownMenu,
  showImage: false,
  menuBg: "white",
  menuColor: "dark",
};


export const customDropdown = (args) => (
  <Dropdown {...args} />
);

customDropdown.args = {
  className: "border rounded-2xl py-2 px-5 bg-theme-primary text-theme-white hover:bg-theme-success ",
  title: "Dropdown",
  menu: dropdownMenu,
  showImage: false,
  menuBg: "white",
  menuColor: "dark",
  menuPosition:"left"
};

export const iconDropdown = (args) => (
  <Dropdown {...args} />
);

iconDropdown.args = {
  ClassName: "",
  title: "Dropdown",
  menu: dropdownMenu,
  image: dropdownImage,
  showImage: true,
  menuBg: "white",
  menuColor: "dark",
  menuPosition:"left"
};
