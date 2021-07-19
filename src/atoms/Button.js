import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const VARIENTS = {
  SOLID: 'solid',
  OUTLINE: 'outline',
  SOLID_PILL: 'solid-pill',
  OUTLINED_PILL: 'outline-pill',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const CORNER_RADIUS = {
  rounded: 'rounded',
  pill: 'rounded-full'
}

const COLOR = {
  primary: 'primary',
  secondary: 'secondary'
}

export const Button = (props) => {
	const { isLink, label="Button", size, type = 'button', onClick, className, color, varient, isDisabled = false, cornerRadius, isLoading, loadingText, title} = props

  let buttonVarient;
  if (varient === "solid") {
    buttonVarient = `bg-theme-${color} text-white hover:bg-opacity-90 border-theme-${color} rounded`;
  } else if (varient === "outline") {
    buttonVarient = `border-theme-${color} text-theme-${color} hover:bg-theme-${color} hover:text-white rounded`;
  } else if (varient === "solid-pill") {
    buttonVarient = `bg-theme-${color} text-white hover:bg-opacity-90 border-theme-${color} rounded-full`;
  } else if (varient === "outline-pill") {
    buttonVarient = `border-theme-${color} text-theme-${color} hover:bg-theme-${color} hover:text-white rounded-full`;
  } else {
    buttonVarient = `bg-theme-${color} text-white hover:bg-opacity-90 border-theme-${color} rounded`;
  }

  let buttonDisabled = '';
  buttonDisabled = (isDisabled ? 'cursor-not-allowed hover:bg-opacity-60 bg-opacity-60 border-opacity-10 text-opacity-60	 ' : '');

  let buttonClassName = '';
  buttonClassName = ( `${buttonVarient} ${buttonDisabled} ` + (size === 'small' ? 'px-5 py-3 ' : 'px-8 py-4 ') + `${cornerRadius} ${className}` );

  const buttonInner = (
    <Fragment>
      {label + ' '}
      {isLoading && <Fragment>{loadingText || ' Loading...'}</Fragment>}
    </Fragment>
  );

  if(isLink){
    return(
      <a title={title} className={`${buttonClassName} border`}>
        {buttonInner}
      </a>
    )
  }
	return (
		<button
			type={type}
      className={`${buttonClassName} border`}
			disabled={isDisabled}
			onClick={onClick}
			title={title}
		>
			{buttonInner}
		</button>
	)
}



Button.propTypes = {
  title: PropTypes.any,
  varient:PropTypes.oneOf(Object.values(VARIENTS)),
  cornerRadius: PropTypes.oneOf(Object.values(COLOR)),
  isLoading: PropTypes.bool,
  /** When a button is in the loading state you can supply custom text */
 loadingText: PropTypes.node,
  /** Buttons that have hrefs should use <a> instead of <button>*/
  isLink: PropTypes.bool,

  /** What label button has */
  label: PropTypes.node.isRequired,
  /** Buttons that have outline and fills on hover */
  outline: PropTypes.bool,
  isDisabled: PropTypes.bool,

  /** Buttons having different sizes */
  size: PropTypes.oneOf(Object.values(SIZES)),
  // ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  cornerRadius: PropTypes.oneOf(Object.values(CORNER_RADIUS)),
};

Button.defaultProps = {
  color: COLOR.primary,
  varient:VARIENTS.solid,
  isLoading: false,
  loadingText: null,
  isLink: false,
  isDisabled: false,
  size: SIZES.MEDIUM,
  cornerRadius: CORNER_RADIUS.rounded,
};
