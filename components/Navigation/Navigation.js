import React from 'react';
import Nav from './Nav';
import NavList from './NavList';

const Navigation = ({ isMenuOpen, toggleMenuOpen }) => {
  return (
    <Nav isMenuOpen={isMenuOpen}>
      <NavList toggleMenuOpen={toggleMenuOpen} />
    </Nav>
  );
};

export default Navigation;
