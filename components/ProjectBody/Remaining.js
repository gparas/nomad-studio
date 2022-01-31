import React from 'react';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const Remaining = ({ remaining, lastItem, onClick }) => {
  if (!remaining || !lastItem) return null;
  return (
    <CardActionArea
      sx={{
        backgroundColor: 'rgb(0 0 0 / 50%)',
        color: '#fff',
        zIndex: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    >
      <Typography variant="h2" component="div" fontWeight="fontWeightMedium">
        +{remaining}
      </Typography>
    </CardActionArea>
  );
};

export default Remaining;
