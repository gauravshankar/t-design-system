import React from "react";
import PropTypes from "prop-types";

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export function RadioButton({
  appearance,
  icon,
  isLoading,
  id,
  label,
  error,
  hideLabel,
  customRadio,
  customRadioClass,
  name,
  value,
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

  const defaultRadio = `rounded-full border-theme-${appearance} ${controlSize} mr-2 focus:border-transparent focus:bg-theme-${appearance} text-theme-${appearance} focus:ring-1 focus:ring-offset-2 focus:ring-theme-${appearance}`;
  return !isLoading ? (
    <>
      <label className="radio flex p-2 items-center">
        {customRadio ? (
          <div className={customRadioClass}>
            <input type="radio" name={name} value={value} id={id} className="hidden" />
            <div className="icon-src hidden">
              {icon}
            </div>
          </div>
        ) : (
          <label className="inline-flex items-center">
              <input type="radio" className={defaultRadio} />
          </label>
        )}
        {!hideLabel && label && <span className="select-none">{label}</span>}
      </label>
      {error && <div error={error}>{error}</div>}{" "}
    </>
  ) : (
    <label className="flex p-2"> Loading...</label>
  );
}


RadioButton.propTypes = {
  appearance:PropTypes.string,
  icon:PropTypes.string,
  isLoading:PropTypes.bool,
  id: PropTypes.string,
  label:PropTypes.string,
  error:PropTypes.string,
  hideLabel:PropTypes.bool,
  customRadio:PropTypes.bool,
  customRadioClass:PropTypes.string,
  size:PropTypes.oneOf(Object.values(SIZES)),
};
