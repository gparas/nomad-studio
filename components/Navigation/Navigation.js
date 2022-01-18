import React from 'react';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import NavList from './NavList';

const Navigation = ({ isMenuOpen, toggleMenuOpen }) => {
  return (
    <Drawer
      open={isMenuOpen}
      onClose={toggleMenuOpen}
      anchor="top"
      hideBackdrop
      elevation={0}
      PaperProps={{
        sx: {
          height: '100%',
        },
      }}
      SlideProps={{
        timeout: 500,
      }}
    >
      <Grid container alignItems="center" flexGrow={1}>
        <Grid item xs={12}>
          <NavList toggleMenuOpen={toggleMenuOpen} />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default Navigation;
