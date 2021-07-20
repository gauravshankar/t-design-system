import React from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/outline";
import { NavBar } from "./navbar";
import { Dropdown } from "./dropdown";

export default {
  title: "Design System/Molecules/navbar",
  component: NavBar,
  argTypes: {
    navigation: "",
    logo: "",
    theme: {
      control: {
        type: "select",
        options: ["danger", "warning", "success", "info", "dark"],
      },
    },
    textColor: {
      control: {
        type: "select",
        options: ["danger", "warning", "success", "info", "dark", "white"],
      },
    },
  },
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const dropdownMenu = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const dropdownImage = () => {
  return <UserCircleIcon className="h-8 w-8 text-white" aria-hidden="true" />;
};

const logo = () => {
  return (
    <>
      <img
        className="block lg:hidden h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
      <img
        className="hidden lg:block h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
        alt="Workflow"
      />
    </>
  );
};
export const navbar = (args) => (
  <NavBar {...args}>
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <button
        className={classNames(
          "text-white bg-gray-700 bg-opacity-50 hover:bg-opacity-30 p-1 rounded-full focus:outline-none focus:ring-1 focus:ring-white"
        )}
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Dropdown
        ClassName=""
        title="Dropdown"
        menu={dropdownMenu}
        image={dropdownImage}
        showImage={true}
        menuBg="white"
        menuColor="dark"
        menuPosition="right"
      />
    </div>
  </NavBar>
);

navbar.args = {
  navigation: navigation,
  logo: logo(),
  theme: "primary",
  textColor: "white",
};
