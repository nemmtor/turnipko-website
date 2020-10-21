import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <span>© {new Date().getFullYear()} Turnipko</span>
      <span>
        Made by <a href="https://nemmtor.github.io">Kacper Witas</a>
      </span>
    </div>
  </footer>
);

export default Footer;
