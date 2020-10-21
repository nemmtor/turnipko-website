import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Nav from '../components/nav/nav';

const IndexPage = () => (
  <Layout
    headingText="Turnipko"
    subHeading="Beautiful pictures of your baby"
    ctaText="Contact me"
    ctaUrl="/contact"
  >
    <SEO title="Home" />
    <Nav />
  </Layout>
);

export default IndexPage;
