import React from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { Box, Link } from 'theme-ui';
import C from './constants';

const parentVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 1 },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const childrenVariants = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const NavList = ({ toggleMenuOpen }) => {
  const MotionList = motion(Box);
  const MotionListItem = motion(Box);
  const MotionLink = motion(Link);
  return (
    <MotionList
      as="ul"
      sx={{ margin: 0, padding: 0, listStyle: 'none' }}
      variants={parentVariants}
    >
      {C.LINKS.map((link) => (
        <MotionListItem
          key={link.label}
          as="li"
          mb={3}
          sx={{ overflow: 'hidden' }}
        >
          <NextLink href={link.href} passHref>
            <MotionLink
              onClick={toggleMenuOpen}
              variants={childrenVariants}
              sx={{
                display: 'inline-block',
                fontSize: 8,
                lineHeight: 1,
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </MotionLink>
          </NextLink>
        </MotionListItem>
      ))}
    </MotionList>
  );
};

export default NavList;
