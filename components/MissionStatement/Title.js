import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Title = () => {
  return (
    <Box mb={[8, 15]}>
      <div style={{ width: '30%', display: 'inline-block' }} />
      <Typography
        variant="h2"
        fontFamily="fontFamilySerif"
        sx={{
          display: 'inline',
        }}
      >
        We create architectural experiences — informed by tradition and inspired
        by contemporary life.
      </Typography>
    </Box>
  );
};

export default Title;
