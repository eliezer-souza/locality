import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './style';

const GenericTemplate = ({ children }) => <Wrapper>{children}</Wrapper>;

GenericTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GenericTemplate;
