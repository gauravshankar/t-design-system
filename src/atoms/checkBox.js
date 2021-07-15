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
  customCheck,
  customCheckClass,
  ...props
}) {
  const defaultCheck = `rounded border-theme-${appearance} focus:border-transparent focus:bg-theme-${appearance} text-theme-${appearance} focus:ring-1 focus:ring-offset-2 focus:ring-theme-${appearance}`;
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
            <label class="inline-flex items-center">
              <input type="checkbox" class={defaultCheck} />
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
