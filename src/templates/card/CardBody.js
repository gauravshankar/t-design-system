import React from "react";
import PropTypes from "prop-types";

export const CardBody = (props) => {
    const {children, className} = props;
    return (
        <div className={` ${className}`}>
          {children}
        </div>
      );
}