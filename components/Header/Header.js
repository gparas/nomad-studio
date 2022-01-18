import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuToggle from './MenuToggle';

const Header = ({ isMenuOpen, toggleMenuOpen }) => {
  return (
    <AppBar
      color="transparent"
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NOMAD STUDIO
        </Typography>
        <MenuToggle isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
