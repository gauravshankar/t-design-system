/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import classnames from "classnames";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar({ navigation, logo, theme, textColor, ...props }) {
  return (
    <Disclosure
      as="nav"
      className={classnames(theme ? "bg-theme-" + theme : "bg-gray-800")}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className={classNames(textColor? "text-theme-"+textColor : "text-white","hover:bg-gray-700 hover:bg-opacity-50 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-1 bg-opacity-5 focus:ring-inset focus:ring-white")}>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6 " aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">{logo}</div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-opacity-50"
                            : "hover:bg-opacity-30",
                            textColor? "text-theme-"+textColor : "text-white",
                          "px-3 py-2 rounded-md text-sm font-medium bg-gray-700 bg-opacity-0 text-opacity-80 hover:text-opacity-100"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
             {props.children}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                          item.current
                            ? "bg-opacity-50 text-opacity-100"
                            : "hover:bg-opacity-30",
                            textColor? "text-theme-"+textColor : "text-white",
                          "block px-3 py-2 text-sm bg-gray-700 bg-opacity-0 text-opacity-80 hover:text-opacity-100"
                        )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
