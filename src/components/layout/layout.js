import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import Footer from '../footer/footer';
import Header from '../header/header';
import Nav from '../nav/nav';

const Layout = ({ children, headingText, subHeading, ctaText, ctaUrl }) => {
  return (
    <>
      <Nav />
      <Header
        headingText={headingText}
        subHeading={subHeading}
        ctaText={ctaText}
        ctaUrl={ctaUrl}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headingText: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
};

Layout.defaultProps = {
  ctaText: '',
  ctaUrl: '',
};

export default Layout;
