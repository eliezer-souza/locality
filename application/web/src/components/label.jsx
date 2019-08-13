import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop, theme } from 'styled-tools';

const label = css`
  font-family: ${theme('fonts.text')};
  font-size: ${prop('size')};
  color: ${theme('colors.text.light')};
`;

const StyledLabel = styled.label`
  ${label}
`;

const Label = props => <StyledLabel {...props} />;

Label.propTypes = {
  size: PropTypes.string,
};

Label.defaultProps = {
  size: '14px',
};

export default Label;
