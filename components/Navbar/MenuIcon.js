import React from 'react';
import clsx from 'clsx';

const MenuIcon = ({ isActive }) => {
  return (
    <span className={clsx('menu-button__icon', isActive && 'is-active')}>
      <span></span>
    </span>
  );
};

export default MenuIcon;
