import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = ({ headingText }) => {
  const { bg } = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "headerbg.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const backgroundStack = [
    `linear-gradient(rgba(201,203,220, 0.55), rgba(201,203,220, 0.55))`,
    bg.childImageSharp.fluid,
  ];

  return (
    <BackgroundImage
      Tag="header"
      className={styles.header}
      fluid={backgroundStack}
    >
      <h1 className={styles.heading}>{headingText}</h1>
    </BackgroundImage>
  );
};

Header.propTypes = {
  headingText: PropTypes.string.isRequired,
};


export default Header;
