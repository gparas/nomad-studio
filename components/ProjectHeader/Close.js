import React from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Close = () => {
  const router = useRouter();
  return (
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
          onClick={() => router.push('/projects', '', { scroll: false })}
          sx={{
            ml: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            color: '#fff',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Close;
