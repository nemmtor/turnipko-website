import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import styles from './gallery.module.scss';

const Gallery = ({ images }) => (
  <div className={styles.gallery}>
    {images.map(({ fixed, id, description }) => (
      <Img fixed={fixed} key={id} alt={description} className={styles.image} />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      fixed: PropTypes.shape({}),
      fluid: PropTypes.shape({}),
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Gallery;
