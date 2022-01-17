import React from 'react';
import { IconButton } from 'theme-ui';
import { motion } from 'framer-motion';

const variants = {
  open: (custom) => ({
    rotate: custom.rotate,
    y: custom.position,
  }),
  close: (custom) => ({
    rotate: 0,
    y: 0,
    transition: {
      rotate: { from: custom.rotate, duration: 0.1 },
      y: { from: custom.position, delay: 0.3 },
    },
  }),
};

const Path = ({ isMenuOpen, ...other }) => {
  const transition = { rotate: { delay: 0.3 }, duration: 0.1 };
  return (
    <motion.path
      fill="none"
      strokeWidth="2"
      strokeMiterlimit="10"
      stroke={isMenuOpen ? 'black' : 'currentColor'}
      strokeLinecap="round"
      initial="close"
      animate={isMenuOpen ? 'open' : 'close'}
      transition={transition}
      variants={variants}
      {...other}
    />
  );
};

const MenuIcon = ({ isMenuOpen, toggleMenuOpen }) => {
  return (
    <IconButton onClick={() => toggleMenuOpen()} sx={{ width: 48, height: 48 }}>
      <svg width="32" height="32" viewBox="0 0 32 32">
        <Path
          d="M2 9, L30, 9"
          isMenuOpen={isMenuOpen}
          custom={{ rotate: 45, position: 7 }}
        />
        <Path
          d="M30 23, L2, 23"
          isMenuOpen={isMenuOpen}
          custom={{ rotate: -45, position: -7 }}
        />
      </svg>
    </IconButton>
  );
};

export default MenuIcon;
