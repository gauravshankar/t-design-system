import React from "react";
import PropTypes from "prop-types";

export function ToggleButton({
  appearance,
  barColor,
  isLoading,
  id,
  label,
  error,
  hideLabel,
  ...props
}) {
  const slider = `border-theme-${appearance} w-10 h-4 rounded-full shadow-inner bg-theme-${barColor}`;
  const dot =`dot absolute w-6 h-6 rounded-full shadow -left-1 -top-1 transition bg-theme-${appearance}`
  return !isLoading ? (
    <>
      <label className="toggle flex p-2 items-center">
        <div className="relative w-14">
          <input type="checkbox" id={id} className="hidden" />
          <div className={slider}></div>
          <div className={dot}></div>
        </div>
        {!hideLabel && label && <span className="select-none">{label}</span>}
      </label>
      {error && <div error={error}>{error}</div>}{" "}
    </>
  ) : (
    <label className="custom-label flex p-2"> Loading...</label>
  );
}


ToggleButton.propTypes = {
  appearance:PropTypes.string,
  barColor:PropTypes.string,
  isLoading: PropTypes.bool,
  id:PropTypes.string,
  label:PropTypes.string,
  hideLabel:PropTypes.bool
};
