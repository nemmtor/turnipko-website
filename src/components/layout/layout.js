import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import Footer from '../footer/footer';
import Header from '../header/header';
import Nav from '../nav/nav';
import styles from './layout.module.scss';

//TODO: Move currentImage to redux store, than useEffect here
// depending on isFullScreen(from store) - if it is true than display on layout
// FullScreenImage with currentImage from store
const Layout = ({ children, headingText }) => {
  return (
    <>
      <Nav />
      <Header
        headingText={headingText}
        className={styles.heading}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headingText: PropTypes.string.isRequired,
};


export default Layout;
