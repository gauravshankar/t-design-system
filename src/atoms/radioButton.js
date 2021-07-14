import React from "react";
import PropTypes from "prop-types";

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
  ...props
}) {
  const defaultRadio = `appearance-none h-4 w-4 rounded-full border border-theme-${appearance} checked:bg-theme-${appearance}`;
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
          <div className="flex justify-center items-center mr-2">
            <input type="radio" name={name} value={value} id={id} className={defaultRadio} />
            <div className="space-y-2"></div>
          </div>
        )}
        {!hideLabel && label && <span className="select-none">{label}</span>}
      </label>
      {error && <div error={error}>{error}</div>}{" "}
    </>
  ) : (
    <label className="flex p-2"> Loading...</label>
  );
}
