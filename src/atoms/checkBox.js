import React from "react";
import PropTypes from "prop-types";

export function Checkbox({
  appearance,
  icon,
  isLoading,
  id,
  label,
  error,
  hideLabel,
  iconSource,
  customCheckClass,
  ...props
}) {
  const defaultCheck = `appearance-none h-4 w-4 rounded border border-theme-${appearance} checked:bg-theme-${appearance}`;
  return !isLoading ? (
    <>
      <label className="custom-label flex p-2 items-center">
        {icon ? (
          <div className={customCheckClass}>
            <input type="checkbox" id={id} className="hidden" />
            <div className="icon-src hidden">
              {iconSource}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center mr-2">
            <input type="checkbox" id={id} className={defaultCheck} />
            <div className="space-y-2"></div>
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
