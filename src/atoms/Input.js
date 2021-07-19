import React from "react";
import PropTypes from "prop-types";

const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};

export const Control = (props) => {
  const {
    id,
    label,
    type,
    className,
    placeholder,
    size,
    isDisabled,
    onChange,
    onBlur,
    value,
  } = props;

  let controlSize;
  if (size === "small") {
    controlSize = "px-2 py-1 text-sm";
  } else if (size === "large") {
    controlSize = "px-4 text-lg";
  } else {
    controlSize = "";
  }

  let controlDisabled = "";
  controlDisabled = isDisabled ? "cursor-not-allowed bg-gray-200 bg-opacity-60 " : "";

  let controlClassName = "";
  controlClassName = `w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary ${controlDisabled} ${controlSize} ${className}`;

  return (
    <>
      <div className='control-group pb-2'>
        <label className='text-primary mb-1 inline-block' htmlFor={id}>
            {label}
        </label>
        <input
            id={id}
            type={type}
            className={`control-input focus:border-theme-primary focus:ring-theme-primary ${controlClassName}`}
            aria-describedby={type + 'help'}
            placeholder={placeholder}
            // onChange={onChange}
            // onBlur={onBlur}
            value={value}
            disabled={isDisabled}
        />
    </div>
    </>
  );
};

Control.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    // onChange: PropTypes.any,
    // onBlur: PropTypes.any,
    value: PropTypes.string,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
};

Control.defaultProps = {
  isDisabled: false,
  size: SIZES.MEDIUM,
  id: 'default_ControlField',
  type: 'text',
  className: '',
  placeholder: 'I am Placeholder',
//   onChange: false,
//   onBlur: false,
  value: 'I am default value',
};
