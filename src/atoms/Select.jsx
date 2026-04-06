import React from "react";
import PropTypes from "prop-types";

const SIZES = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
};

export const Select = (props) => {
    const { id = '',size,isDisabled, className, label, options, onChange = () => { } } = props

    let controlSize;
    if (size === "small") {
        controlSize = "px-2 py-1 text-sm";
    } else if (size === "large") {
        controlSize = "px-4 text-lg";
    } else {
        controlSize = "";
    }

    let controlDisabled = "";
    controlDisabled = isDisabled
        ? "cursor-not-allowed bg-gray-200 bg-opacity-60 "
        : "";

    let controlClassName = "";
    controlClassName = `w-full border-gray-300 rounded-lg shadow-sm focus:border-primary focus:ring-primary ${controlDisabled} ${controlSize} ${className}`;


    return (
        <div className="control-group pb-2">
            {label && (
                <label className="text-primary mb-1 inline-block" htmlFor={id}>
                    {label}
                </label>
            )}
            <select className={`control-input focus:border-theme-primary focus:ring-theme-primary ${controlClassName}`}>
                {options.map(option => {
                    return <option value={option} key={option}>{option}</option>
                })}
            </select>
        </div>
    )
}

Select.propTypes = {
    id: PropTypes.string,
    options: PropTypes.array,
    className: PropTypes.string,
    isDisabled: PropTypes.bool,
    size: PropTypes.oneOf(Object.values(SIZES)),
    label: PropTypes.string,
  };

Select.defaultProps = {
    options: [],
    isDisabled: false,
    size: SIZES.MEDIUM,
    id: "default_ControlField",
    className: "",
    label: '',  
};