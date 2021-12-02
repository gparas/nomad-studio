import React from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import C from './constants';

const Menu = ({ open, onClose }) => {
  const router = useRouter();
  return (
    <Drawer
      anchor="right"
      open={open}
      transitionDuration={400}
      PaperProps={{
        sx: { width: '100%' },
      }}
    >
      <Toolbar>
        <IconButton
          onClick={onClose}
          color="inherit"
          aria-label="close menu"
          edge="end"
          size="large"
          sx={{ marginLeft: 'auto' }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      </Toolbar>
      <List>
        {C.LINKS.map((link) => (
          <NextLink key={link.label} href={link.href} passHref>
            <ListItem button component="a" onClick={onClose}>
              {router.pathname === link.href ? (
                <ListItemIcon>
                  <ArrowForwardIcon fontSize="large" />
                </ListItemIcon>
              ) : null}
              <ListItemText
                primary={link.label}
                primaryTypographyProps={{
                  variant: 'h2',
                  sx: { fontWeight: 'regular' },
                }}
              />
            </ListItem>
          </NextLink>
        ))}
      </List>
    </Drawer>
  );
};

export default Menu;
