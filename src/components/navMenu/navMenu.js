import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import styles from './navMenu.module.scss';

const navMenu = ({ isOpen }) => {
  return (
    <ul
      className={`${styles.navMenu} ${isOpen ? styles.opened : ''}`}
      id="navigation"
    >
      <li className={styles.navItem}>
        <Link
          to="/"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          Home
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/portfolio"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          Portfolio
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/about"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          About
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/pricing"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          Pricing
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link
          to="/contact"
          activeClassName={styles.activeLink}
          className={styles.link}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
};

navMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default navMenu;
