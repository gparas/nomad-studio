import React, { useState } from 'react';
import { Flex, Box, Heading, Container, MenuButton, Close } from 'theme-ui';
import Menu from './Menu';

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
          {open ? (
            <Close onClick={toggleMenu} />
          ) : (
            <MenuButton aria-label="Toggle Menu" onClick={toggleMenu} />
          )}
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
