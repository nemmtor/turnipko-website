import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Nav from '../components/nav/nav';
import Gallery from '../components/gallery/gallery';

const IndexPage = ({ data }) => {
  const last3Images = data.turnipko.images;
  const images = last3Images.map(img => img.img.url);

  return (
    <Layout
      headingText="Turnipko"
      subHeading="Beautiful pictures of your baby"
      ctaText="Contact me"
      ctaUrl="/contact"
    >
      <SEO title="Home" />
      <Nav />
      <section className="section">
        <h2 className="section__title">Last images</h2>
        <Gallery images={images} />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Last3Images {
    turnipko {
      images(orderBy: createdAt_DESC, first: 3) {
        createdAt
        img {
          url
        }
      }
    }
  }
`;

export default IndexPage;
