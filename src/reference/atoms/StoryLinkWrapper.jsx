// This replaces the storybook action addon for mocked functions
import React from 'react';
import PropTypes from 'prop-types';

const fireClickAction = (href) => console.log('onLinkClick', href);

export function StoryLinkWrapper({ children, className, href, onClick, to, ...rest }) {
  const modifiedOnClick = event => {
    event.preventDefault();
    onClick();
    fireClickAction(href || to);
  };

  return (
    <a className={className} href={href || to} onClick={modifiedOnClick} {...rest}>
      {children}
    </a>
  );
}

StoryLinkWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

StoryLinkWrapper.defaultProps = {
  className: '',
  href: null,
  onClick: () => {},
  to: null,
};
