import React from "react";
import PropTypes from "prop-types";

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export function Checkbox({
  appearance,
  icon,
  isLoading,
  id,
  label,
  error,
  hideLabel,
  customCheck,
  customCheckClass,
  size,
  ...props
}) {
  let controlSize;
  if (size === "medium") {
    controlSize = "p-2";
  } else if (size === "large") {
    controlSize = "p-4";
  } else {
    controlSize = "";
  }
  const defaultCheck = `rounded border-theme-${appearance} ${controlSize} focus:border-transparent focus:border-theme-${appearance} focus:ring-1 focus:ring-offset-2  focus:ring-theme-${appearance} focus:text-theme-${appearance} checked:bg-theme-${appearance}`;

  return !isLoading ? (
    <>
      <label className="checkbox flex p-2 items-center">
        {customCheck ? (
          <div className={customCheckClass}>
            <input type="checkbox" id={id} className="hidden" />
            <div className="icon-src hidden">{icon}</div>
          </div>
        ) : (
          <div className="flex justify-center items-center mr-2">
            <label className="inline-flex items-center">
              <input type="checkbox" className={defaultCheck} />
            </label>
          </div>
        )}
        {!hideLabel && label && <span className="select-none">{label}</span>}
      </label>
      {error && <div error={error}>{error}</div>}{" "}
    </>
  ) : (
    <label className="custom-label flex p-2"> Loading...</label>
  );
}

Checkbox.propTypes = {
  appearance:PropTypes.string,
  icon:PropTypes.string,
  isLoading:PropTypes.bool,
  id: PropTypes.string,
  label:PropTypes.string,
  error:PropTypes.string,
  hideLabel:PropTypes.bool,
  customCheck:PropTypes.bool,
  customCheckClass:PropTypes.string,
  size:PropTypes.oneOf(Object.values(SIZES)),
};

