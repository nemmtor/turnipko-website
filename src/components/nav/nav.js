import React, { useState } from 'react';

import styles from './nav.module.scss';
import Burger from '../burger/burger';
import NavMenu from '../navMenu/navMenu';
import Logo from '../logo';

// TODO: Make state isFullScreen => isFullScreen ? display: none on nav!
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <Logo />
      <Burger toggleNav={toggleNav} isOpen={isOpen} />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

export default Nav;
