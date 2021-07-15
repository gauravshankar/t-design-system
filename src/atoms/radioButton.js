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
  const defaultRadio = `rounded-full border-theme-${appearance} mr-2 focus:border-transparent focus:bg-theme-${appearance} text-theme-${appearance} focus:ring-1 focus:ring-offset-2 focus:ring-theme-${appearance}`;
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
          <label class="inline-flex items-center">
              <input type="radio" class={defaultRadio} />
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
