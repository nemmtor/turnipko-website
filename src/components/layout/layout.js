import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import Footer from '../footer/footer';
import Header from '../header/header';
import Nav from '../nav/nav';

const Layout = ({ children, headingText}) => {
  return (
    <>
      <Nav />
      <Header
        headingText={headingText}
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
