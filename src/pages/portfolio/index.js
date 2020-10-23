import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import ImageLink from '../../components/imageLink/imageLink';

const images = [
  { title: 'new born', imgSrc: 'imageLinks/newborn.jpg', link: 'new-born' },
  { title: 'sitters', imgSrc: 'imageLinks/sitters.jpg', link: 'sitters' },
  {
    title: 'cake smash',
    imgSrc: 'imageLinks/cakesmash.jpg',
    link: 'cake-smash',
  },
  { title: 'maternity', imgSrc: 'imageLinks/maternity.jpg', link: 'maternity' },
  { title: 'other', imgSrc: 'imageLinks/other.jpg', link: 'other' },
];

const Portfolio = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(filter: { relativePath: { regex: "/imageLinks/" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  );
  return (
    <Layout
      headingText="My portfolio"
      subHeading="Click on the picture to visit specific gallery"
    >
      <SEO title="Portfolio" />
      <section className="section">
        {images.map(({ title, imgSrc, link }) => {
          const edge = allFile.edges.filter(
            edge => edge.node.relativePath === imgSrc,
          )[0];
          const fluid = edge.node.childImageSharp.fluid;
          console.log(fluid);
          return (
            <ImageLink key={title} title={title} fluid={fluid} link={link} />
          );
        })}
      </section>
    </Layout>
  );
};

export default Portfolio;
