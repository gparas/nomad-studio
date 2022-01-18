import React, { forwardRef } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Section = forwardRef((props, ref) => {
  const { children, ...other } = props;
  return (
    <Box as="section" ref={ref} {...other}>
      <Container sx={{ position: 'relative' }}>{children}</Container>
    </Box>
  );
});

Section.displayName = 'Section';

export default Section;
