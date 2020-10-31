import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Gallery from '../components/gallery/gallery';
import getImagesFromQuery from '../utils/getImagesFromQuery';

const IndexPage = () => {
  const queryResult = useStaticQuery(
    graphql`
        query {
            mobile: allGraphCmsImage(limit:5, sort: {fields: [createdAt], order: [DESC]}) {
                nodes {
                    createdAt
                    description
                    id
                    img {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 1000, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
            desktop: allGraphCmsImage(limit:5, sort: {fields: [createdAt], order: [DESC]}) {
                nodes {
                    id
                    img {
                        localFile {
                            childImageSharp {
                                fluid(maxWidth: 2000, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    `,
  );

  const images = getImagesFromQuery(queryResult);

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

export default IndexPage;
