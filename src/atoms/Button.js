import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// interface Props {
// 	className?: string
// 	color?: string
// 	disabled?: boolean
// 	icon?: any
// 	iconClassName?: string
// 	label: string
// 	outline?: boolean
// 	size?: 'sm' | 'md' | 'lg'
// 	type?: 'button' | 'reset' | 'submit'
// 	onClick?: (e: any) => any
// 	title?: string
// }

const APPEARANCES = {
  PRIMARY: 'primary',
  // PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  // SECONDARY_OUTLINE: 'secondaryOutline',
  // TERTIARY: 'tertiary',
  // OUTLINE: 'outline',
};

const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

export const Button = (props) => {
	const {className = '', color = 'primary', isDisabled = false, cornerRadius, icon, iconClassName = ''} = props
	const {label="Button", outline = false, size = '', type = 'button', onClick, title} = props;
  //Set Outline Button as per theme
  let isOutlineButton ='';
  isOutlineButton = (outline ? `border-theme-${color} text-theme-${color} hover:bg-theme-${color} hover:text-white` : `bg-theme-${color} text-white hover:bg-opacity-90 border-theme-${color}`)
  let buttonDisabled = '';
  buttonDisabled = (isDisabled ? 'cursor-not-allowed bg-opacity-65 ' : '');

  let buttonClassName = '';
  buttonClassName = ( `${isOutlineButton} ${buttonDisabled} ` + (size === 'small' ? 'px-5 py-3 ' : 'px-8 py-4 ') + `${cornerRadius} ${className}` );



	return (
		<button
			type={type}
      className={`${buttonClassName} border`}
			disabled={isDisabled}
			onClick={onClick}
			title={title}
		>
			{label}
		</button>
	)
}



Button.propTypes = {
  isLoading: PropTypes.bool,
  
   /** When a button is in the loading state you can supply custom text
  */
 loadingText: PropTypes.node,
  
   /** Buttons that have hrefs should use <a> instead of <button>
  */
  isLink: PropTypes.bool,
  label: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(Object.values(APPEARANCES)),
  /**
    Buttons that have outline and fills on hover
  */
  outline: PropTypes.bool,
  isDisabled: PropTypes.bool,
  /**
   Prevents users from clicking on a button multiple times (for things like payment forms)
  */
  isUnclickable: PropTypes.bool,
  /**
   Buttons with icons by themselves have a circular shape
  */
  containsIcon: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  ButtonWrapper: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  cornerRadius: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  loadingText: null,
  isLink: false,
  appearance: APPEARANCES.TERTIARY,
  isDisabled: false,
  isUnclickable: false,
  containsIcon: false,
  size: SIZES.MEDIUM,
  ButtonWrapper: undefined,
  outline: false,
  cornerRadius: 'rounded',
};
