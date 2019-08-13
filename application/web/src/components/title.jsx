import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ifProp, prop, theme } from 'styled-tools';

const title = css`
  font-family: ${theme('fonts.primary')};
  font-size: ${prop('size')};
  font-weight: 800;
  color: ${ifProp(
    'primary',
    theme('colors.primary.normal'),
    theme('colors.text.dark'),
  )};
`;

const StyledTitle = styled.span`
  ${title}
`;

const Title = props => <StyledTitle {...props} />;

Title.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.string,
};

Title.defaultProps = {
  primary: false,
  size: '24px',
};

export default Title;
