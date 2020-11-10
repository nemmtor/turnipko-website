import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Gallery from '../components/gallery';
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
            sectionBg: file(relativePath: {eq:"gallerybg.png"}){
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `,
  );

  const images = getImagesFromQuery(queryResult);
  const {sectionBg} = queryResult;

  return (
    <Layout
      headingText="Baby photography"
    >
      <SEO title="Home" />
      <BackgroundImage className="section" Tag={"section"} fluid={sectionBg.childImageSharp.fluid}>
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
      </BackgroundImage>
    </Layout>
  );
};

export default IndexPage;
