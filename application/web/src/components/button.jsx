import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp, theme } from 'styled-tools';
import { width, height, fontSize } from './mixins';

const backgroundColor = ({ disabled, type, palette }) => {
  if (disabled) return theme('colors.grayscale.lighter');
  if (type === 'outline' || type === 'ghost') return 'transparent';

  return theme(`colors.${palette}.normal`);
};

const foregroundColor = ({ disabled, type, palette }) => {
  if (disabled) return theme('colors.grayscale.light');
  if (type === 'fill') return theme('colors.white');

  return theme(`colors.${palette}.normal`);
};

const hover = ({ disabled, type, palette }) => {
  const background = () => {
    if (disabled) return theme('colors.grayscale.normal');
    if (type === 'outline') return 'transparent';
    if (type === 'ghost') return theme(`colors.${palette}.lighter`);

    return theme(`colors.${palette}.dark`);
  };

  const color = () => {
    if (disabled) return theme('colors.grayscale.normal');
    if (type === 'outline' || type === 'ghost') {
      return theme(`colors.${palette}.dark`);
    }

    return theme('colors.white');
  };

  return css`
    background-color: ${background};
    color: ${color};
  `;
};

const focusActive = ({ disabled, type, palette }) => {
  const background = () => {
    if (disabled) return theme('colors.grayscale.normal');
    if (type === 'outline') return 'transparent';
    if (type === 'ghost') return theme(`colors.${palette}.lighter`);

    return theme(`colors.${palette}.dark`);
  };

  const color = () => {
    if (disabled) return theme('colors.grayscale.normal');
    if (type === 'outline' || type === 'ghost') {
      return theme(`colors.${palette}.dark`);
    }

    return theme('colors.white');
  };

  const shadow = () => {
    if (disabled || type === 'ghost') return 'none';
    return theme(`colors.${palette}.lighter`);
  };

  return css`
    background-color: ${background};
    color: ${color};
    box-shadow: 0 0 0 2px ${shadow};
  `;
};

const borderColor = ({ type, palette }) => {
  if (type === 'outline') return theme(`colors.${palette}.normal`);

  return 'transparent';
};

const button = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  height: ${height};
  width: ${ifProp('block', '100%', 'auto')};
  min-width: ${width};
  padding: 0 16px;

  font-family: ${theme('fonts.primary')};
  font-size: ${fontSize};

  border-radius: 25px;
  border: 1px solid ${borderColor};

  background-color: ${backgroundColor};
  color: ${foregroundColor};

  cursor: ${ifProp('disabled', 'default', 'pointer')};
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 150ms ease-out, color 150ms ease-out,
    border-color 150ms ease-out;

  &:hover {
    ${hover};
  }

  &:focus,
  &:active {
    ${focusActive};
  }

  &:focus {
    outline: none;
  }
`;

const StyledButton = styled.button`
  ${button}
`;

const Button = props => <StyledButton {...props} />;

Button.propTypes = {
  palette: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']),
  type: PropTypes.oneOf(['fill', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  palette: 'primary',
  type: 'fill',
  size: 'normal',
  disabled: false,
  block: false,
};

export default Button;
