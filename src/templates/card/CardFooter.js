import React from "react";
import PropTypes from "prop-types";

export const CardFooter = (props) => {
    const {children, className} = props;
    return (
        <div className={`border-t border-white border-opacity-25 ${className}`}>
          {children}
        </div>
      );
}