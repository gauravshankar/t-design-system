import React from "react";
import PropTypes from "prop-types";

const COLOR = {
  primary: 'primary',
  secondary: 'secondary',
  warning: 'warning',
  danger: 'danger',
  success: 'success',
  info: 'info',
}

export const Card = (props) => {
    const {children, className, color} = props;

  let cardVarient;
  cardVarient = `bg-theme-${color} text-white border-theme-${color}`;
    return (
        <div className={`rounded border shadow ${cardVarient} ${className}`}>
          {children}
        </div>
      );
}


Card.propTypes = {
  color: PropTypes.oneOf(Object.values(COLOR)),
  className:PropTypes.string,
};

Card.defaultProps = {
  color: COLOR.primary,
  className: ''
};