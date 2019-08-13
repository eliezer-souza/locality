import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { prop, theme } from 'styled-tools';

const packIcon = {
  remix: 'remixicon-',
};

const iconColor = ({ color }) => theme(`colors.${color}.normal`);

const icon = css`
  font-size: ${prop('size')};
  color: ${iconColor};
`;

const StyledIcon = styled.i`
  ${icon}
`;

const Icon = props => {
  const { pack, type } = props;

  return <StyledIcon className={`${packIcon[pack]}${[type]}`} {...props} />;
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  pack: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  pack: 'remix',
  size: '14px',
  color: null,
};

export default Icon;
