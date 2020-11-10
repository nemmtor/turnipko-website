import React from 'react';
import PropTypes from 'prop-types';

import styles from './burger.module.scss';

const Burger = ({ toggleNav, isOpen }) => (
  <button
    className={`${styles.burger} ${isOpen ? styles.opened : ''}`}
    type="button"
    aria-controls="navigation"
    aria-expanded="false"
    aria-haspopup="true"
    aria-label="Open navigation"
    onClick={toggleNav}
  >
    <div className={styles.bar}/>
    <div className={styles.bar}/>
    <div className={styles.bar}/>
  </button>
);

Burger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleNav: PropTypes.func.isRequired,
};

export default Burger;
