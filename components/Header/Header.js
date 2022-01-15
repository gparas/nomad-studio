import React from 'react';
import { Container, Heading } from 'theme-ui';
import Toolbar from '../../components/Toolbar';
import HeaderNav from './HeaderNav';
import MenuToggle from './MenuToggle';

const Header = ({ isMenuOpen, toggleMenuOpen }) => {
  return (
    <HeaderNav>
      <Toolbar>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: '100%',
          }}
        >
          <Heading
            as="h3"
            sx={{
              flexGrow: 1,
              letterSpacing: 1,
            }}
          >
            NOMAD STUDIO
          </Heading>
          <MenuToggle isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
        </Container>
      </Toolbar>
    </HeaderNav>
  );
};

export default Header;
