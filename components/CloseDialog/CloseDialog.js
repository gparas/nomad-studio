import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CloseDialog = ({ onClick }) => {
  return (
    <AnimatePresence>
      <AppBar
        position="absolute"
        color="transparent"
        elevation={0}
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          ease: [0.45, 0.05, 0.55, 0.95],
          duration: 0.64,
          delay: 0.4,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="close"
            onClick={onClick}
            edge="end"
            sx={{
              ml: 'auto',
              color: '#fff',
              fontSize: (theme) => theme.typography.pxToRem(40),
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </AnimatePresence>
  );
};

export default CloseDialog;
