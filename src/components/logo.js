import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Logo = () => {
  const {file} = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 70, height: 70) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return <Img fixed={file.childImageSharp.fixed} />;
};

export default Logo;
