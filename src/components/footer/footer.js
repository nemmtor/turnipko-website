import React from 'react';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      © {new Date().getFullYear()} Turnipko
    </div>
  </footer>
);

export default Footer;
