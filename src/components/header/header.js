import React from 'react';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

const Header = ({ headingText, subHeading, ctaText, ctaUrl }) => {
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
    `linear-gradient(rgba(240, 216, 230, 0.75), rgba(240, 216, 230, 0.75))`,
    bg.childImageSharp.fluid,
  ];

  const handleCtaClick = e => {
    navigate(ctaUrl);
  };

  return (
    <BackgroundImage
      Tag="header"
      className={styles.header}
      fluid={backgroundStack}
    >
      <h1 className={styles.heading}>{headingText}</h1>
      <p className={styles.subHeading}>{subHeading}</p>
      {ctaText.length > 0 && (
        <button className="cta" onClick={handleCtaClick}>
          {ctaText}
        </button>
      )}
    </BackgroundImage>
  );
};

Header.propTypes = {
  headingText: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
};

Header.defaultProps = {
  ctaText: '',
  ctaUrl: '',
};

export default Header;
