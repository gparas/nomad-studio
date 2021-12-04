import React, { useState } from 'react';
import { Box, Heading, Container, IconButton } from 'theme-ui';
import Menu from './Menu';
import MenuIcon from './MenuIcon';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <Menu open={open} />
      <Box
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
        <Container>
          <Heading as="h5" sx={{ flexGrow: 1 }}>
            Persistent drawer
          </Heading>
          <IconButton onClick={toggleMenu}>
            <MenuIcon isActive={open} />
          </IconButton>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
