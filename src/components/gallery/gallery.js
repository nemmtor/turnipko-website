import React from 'react';
import PropTypes from 'prop-types';

import styles from './gallery.module.scss';

const Gallery = ({ images }) => (
  <div className={styles.gallery}>
    {images.map(url => (
      <img src={url} alt="TODO" className={styles.image} />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
