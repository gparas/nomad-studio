import React from 'react';
import { Box } from 'theme-ui';

const HeaderNav = ({ children }) => (
  <Box
    as="header"
    sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 'appBar',
    }}
  >
    {children}
  </Box>
);

export default HeaderNav;
