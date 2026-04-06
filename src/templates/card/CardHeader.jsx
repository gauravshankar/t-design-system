import React from "react";
import PropTypes from "prop-types";

export const CardHeader = (props) => {
    const {children, className} = props;

    const defaultPadding = 'p-3'

    return (
        <div className={`${className} border-b border-white border-opacity-25`}>
          {children}
        </div>
      );
}