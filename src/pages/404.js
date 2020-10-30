import React from 'react';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout headingText="Oops..." subHeading="The page you were looking for doesn't exist...">
    <SEO title="404: Not found" />
  </Layout>
);

export default NotFoundPage;
