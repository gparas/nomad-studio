import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box } from 'theme-ui';

const transition = {
  duration: 0.5,
  delay: 0.3,
  ease: [0.6, 0.05, -0.01, 0.9],
};

const variants = {
  open: {
    y: 0,
  },
  closed: {
    y: '-100%',
    transition: {
      ...transition,
      when: 'afterChildren',
    },
  },
};

const Nav = ({ isMenuOpen, children }) => {
  const MotionNav = motion(Box);
  return (
    <AnimatePresence>
      {isMenuOpen ? (
        <MotionNav
          as="nav"
          py={6}
          px={3}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#ea281e',
            zIndex: 'drawer',
          }}
          initial="closed"
          exit="closed"
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={variants}
          transition={transition}
        >
          {children}
        </MotionNav>
      ) : null}
    </AnimatePresence>
  );
};

export default Nav;
