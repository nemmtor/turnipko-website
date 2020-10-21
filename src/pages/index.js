import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Nav from '../components/nav/nav';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
  </Layout>
);

export default IndexPage;
