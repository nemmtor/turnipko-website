import React from 'react';
import PropTypes from 'prop-types';
import 'normalize.css';

import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = ({ children, headingText, subHeading, ctaText, ctaUrl }) => {
  return (
    <>
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
  ctaText: PropTypes.string.isRequired,
  ctaUrl: PropTypes.string.isRequired,
};

export default Layout;
