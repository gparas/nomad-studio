import React from 'react';
import { Box } from 'theme-ui';

const Toolbar = ({ component = 'div', ...other }) => (
  <Box
    as={component}
    sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: [56, 64, 80],
    }}
    {...other}
  />
);

export default Toolbar;
