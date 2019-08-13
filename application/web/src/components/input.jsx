import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme, ifProp } from 'styled-tools';
import { width, height, fontSize } from './mixins';

const hover = ({ disabled, error }) => {
  const color = () => {
    if (disabled) return theme('colors.grayscale.light');
    if (error) return theme('colors.danger.normal');

    return theme('colors.primary.normal');
  };

  return css`
    border-color: ${color};
  `;
};

const focusActive = ({ disabled, error }) => {
  const color = () => {
    if (disabled) return theme('colors.grayscale.light');
    if (error) return theme('colors.danger.normal');

    return theme('colors.primary.normal');
  };

  return css`
    border-color: ${color};
  `;
};

const input = css`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  line-height: 32px;
  height: ${height};
  padding: 0 11px;
  min-width: ${width};
  width: ${ifProp('block', '100%', 'auto')};

  background-color: ${ifProp(
    'disabled',
    theme('colors.grayscale.lighter'),
    'transparent',
  )};

  border: 1px solid;
  border-color: ${ifProp(
    'error',
    theme('colors.danger.normal'),
    theme('colors.grayscale.light'),
  )};
  border-radius: 25px;

  font-family: ${theme('fonts.text')};
  font-size: ${fontSize};
  color: ${theme('colors.text.light')};

  &:hover {
    ${hover}
  }

  &:focus,
  &:active {
    ${focusActive}
  }
`;

const StyledInput = styled.input`
  ${input}
`;

const Input = props => <StyledInput {...props} />;

Input.propTypes = {
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  block: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
  size: 'normal',
  block: false,
};

export default Input;
