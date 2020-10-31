import React from 'react';
import { navigate } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import PropTypes from 'prop-types';

import styles from './imageLink.module.scss';

const ImageLink = ({ title, fluid, link }) => {
  const backgroundStack = [
    `linear-gradient(rgba(201, 203, 220, 0.75), rgba(201, 203, 220, 0.75))`,
    fluid,
  ];

  const handleClick = async () => {
    await navigate(`/portfolio/${link}`);
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
  fluid: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
};

export default ImageLink;
