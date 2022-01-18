import React from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
  const MotionList = motion(List);
  const MotionLink = motion(ListItemButton);
  return (
    <MotionList
      component="nav"
      initial="closed"
      animate="open"
      variants={parentVariants}
    >
      {C.LINKS.map((link) => (
        <ListItem
          key={link.label}
          component="div"
          sx={{ overflow: 'hidden' }}
          disableGutters
        >
          <NextLink href={link.href} passHref>
            <MotionLink
              component="a"
              onClick={toggleMenuOpen}
              variants={childrenVariants}
            >
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{ variant: 'h3' }}
              />
            </MotionLink>
          </NextLink>
        </ListItem>
      ))}
    </MotionList>
  );
};

export default NavList;
