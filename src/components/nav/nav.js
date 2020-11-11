import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './nav.module.scss';
import Burger from '../burger/burger';
import NavMenu from '../navMenu/navMenu';
import Logo from '../logo';

const Nav = ({isFullScreen}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(prevState => !prevState);
  };

  if(isFullScreen) return null;

  return (
    <nav className={styles.nav}>
      <Logo />
      <Burger toggleNav={toggleNav} isOpen={isOpen} />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

Nav.propTypes = {
  isFullScreen: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ isFullScreen }) => ({ isFullScreen });

export default connect(mapStateToProps)(Nav);
