import React from 'react';

import Wrapper from './style';

const PlatformTemplate = React.memo(({ children }) => (
  <Wrapper>{children}</Wrapper>
));

export default PlatformTemplate;
