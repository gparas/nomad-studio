import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

const btnStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  color: 'rgba(255,255,255,0.7)',
};

const Navigation = ({ direction, ...other }) => {
  return (
    <IconButton
      sx={{
        ...btnStyle,
        [direction]: 8,
        fontSize: (theme) => theme.typography.pxToRem(40),
      }}
      {...other}
    >
      {direction === 'left' ? (
        <ArrowBack fontSize="inherit" />
      ) : (
        <ArrowForward fontSize="inherit" />
      )}
    </IconButton>
  );
};

export default Navigation;
