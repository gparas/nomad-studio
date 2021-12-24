import React from 'react';
import { motion } from 'framer-motion';
import { Box } from 'theme-ui';

const Header = ({ children }) => {
  const MotionHeader = motion(Box);
  return (
    <MotionHeader
      as="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 'appBar',
      }}
    >
      {children}
    </MotionHeader>
  );
};

export default Header;
