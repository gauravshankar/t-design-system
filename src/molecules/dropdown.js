import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export const Dropdown = ({
    className,
  title,
  image,
  showImage,
  menu,
  menuBg,
  menuColor,
  menuPosition,
  ...props
}) => {
  const position =
    menuPosition === "right" ? "right-0" : menuPosition === "left" ? "left-0" :"";
  return (
    <Menu as="div" className="ml-3 relative inline-block">
      {({ open }) => (
        <>
          <div className="flex items-center">
            <Menu.Button className={className}>
              {showImage ? (
                image
              ) : (
                <div className="flex items-center">
                  {title}{" "}
                  {open ? (
                    <ChevronUpIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="-mr-1 ml-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  )}
                </div>
              )}
            </Menu.Button>
          </div>
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className={classNames(
                position,
                menuBg ? "bg-theme-" + menuBg : "bg-white",
                "absolute mt-2 w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none"
              )}
            >
              {menu &&
                menu.map((item) => (
                  <Menu.Item>
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-opacity-20" : "hover:bg-opacity-10",
                        menuColor ? "text-theme-" + menuColor : "text-white",
                        "block px-3 py-2 bg-gray-700 bg-opacity-0 text-opacity-80 hover:text-opacity-100"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Menu.Item>
                ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};
