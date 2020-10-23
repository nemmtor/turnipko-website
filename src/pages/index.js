import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Gallery from '../components/gallery/gallery';
import getImageDataFromQuery from '../utils/getImageDataFromQuery';

const IndexPage = ({ data }) => {
  const images = data.turnipko.images.map(img => getImageDataFromQuery(img));

  return (
    <Layout
      headingText="Turnipko"
      subHeading="Beautiful pictures of your baby"
      ctaText="Contact me"
      ctaUrl="/contact"
    >
      <SEO title="Home" />
      <section className="section">
        <h2 className="section__title">Last images</h2>
        <Gallery images={images} />
        <div className="flex-center-column">
          <p>Wanna see more?</p>
          <Link
            to="/portfolio"
            style={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 'bold',
              padding: '1rem',
            }}
          >
            Checkout gallery
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Last3Images {
    turnipko {
      images(orderBy: createdAt_DESC, first: 3) {
        createdAt
        id
        description
        img {
          url
        }
      }
    }
  }
`;

export default IndexPage;
