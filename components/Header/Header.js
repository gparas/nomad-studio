import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import MenuToggle from './MenuToggle';

const Header = ({ isMenuOpen, toggleMenuOpen }) => {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        elevation={0}
        color="inherit"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="textPrimary"
            sx={{ flexGrow: 1 }}
          >
            NOMAD STUDIO
          </Typography>
          <MenuToggle isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
        </Toolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;
