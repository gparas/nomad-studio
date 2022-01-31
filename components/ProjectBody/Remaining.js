import React from 'react';
import Typography from '@mui/material/Typography';

const Remaining = ({ remaining, lastItem }) => {
  if (!remaining || !lastItem) return null;
  return (
    <div
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgb(0 0 0 / 50%)',
        color: '#fff',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h2" component="div" fontWeight="fontWeightMedium">
        +{remaining}
      </Typography>
    </div>
  );
};

export default Remaining;
