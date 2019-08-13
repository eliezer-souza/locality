import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { theme } from 'styled-tools';

import Label from './label';
import Input from './input';

const label = css`
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-bottom: 15px;

  label {
    ${label}
  }

  .error {
    ${label}

    margin-top: 5px;
    color: ${theme('colors.danger.normal')};
  }
`;

const Field = props => {
  const { description, error } = props;

  return (
    <StyledField>
      {description && <Label>{label}</Label>}
      <Input {...props} error={error} />
      {error && <Label className="error">{error}</Label>}
    </StyledField>
  );
};

Field.propTypes = {
  description: PropTypes.string,
  error: PropTypes.string,
};

Field.defaultProps = {
  description: null,
  error: null,
};

export default Field;
