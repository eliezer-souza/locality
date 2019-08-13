import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledSpace = styled.div`
  ${props => {
    const display = props.type === 'horizontal' ? 'block' : 'inline-block';
    const margin =
      props.type === 'horizontal'
        ? `${props.size} 0 0 0`
        : `0 ${props.size} 0 0`;

    return css`
      display: ${display};
      margin: ${margin};
    `;
  }}
`;

const Space = props => <StyledSpace {...props} />;

Space.propTypes = {
  size: PropTypes.string,
  type: PropTypes.oneOf(['vertical', 'horizontal']),
};

Space.defaultProps = {
  size: '0px',
  type: 'horizontal',
};

export default Space;
