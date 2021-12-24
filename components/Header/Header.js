import React from 'react';
import { Container, Heading } from 'theme-ui';
import HeaderNav from './HeaderNav';
import MenuToggle from './MenuToggle';

const Header = ({ isMenuOpen, toggleMenuOpen }) => {
  return (
    <HeaderNav>
      <Container sx={{ position: 'relative' }}>
        <Heading as="h3" sx={{ flexGrow: 1 }}>
          Persistent drawer
        </Heading>
        <MenuToggle isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
      </Container>
    </HeaderNav>
  );
};

export default Header;
