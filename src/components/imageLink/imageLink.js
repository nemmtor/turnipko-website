import React from 'react';
import { navigate, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

import styles from './imageLink.module.scss';

const ImageLink = ({ title, imgSrc, link }) => {
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
    `linear-gradient(rgba(201, 203, 220, 0.75), rgba(201, 203, 220, 0.75))`,
    bg.childImageSharp.fluid,
  ];

  const handleClick = () => {
    navigate(`/portfolio/${link}`);
  };

  return (
    <BackgroundImage
      tag="div"
      className={styles.imageLink}
      fluid={backgroundStack}
      onClick={handleClick}
    >
      <span>{title}</span>
    </BackgroundImage>
  );
};

ImageLink.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ImageLink;
