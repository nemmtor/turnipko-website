import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout headingText="Oops..." subHeading="The page you were looking for doesn't exist...">
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
