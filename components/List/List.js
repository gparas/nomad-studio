import React from 'react';
import { Box } from 'theme-ui';

const List = ({ component = 'ul', ...other }) => {
  return (
    <Box
      as={component}
      sx={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        position: 'relative',
      }}
      {...other}
    />
  );
};

export default List;
