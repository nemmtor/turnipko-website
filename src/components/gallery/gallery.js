import React from 'react';
import PropTypes from 'prop-types';

import styles from './gallery.module.scss';

const Gallery = ({ images }) => (
  <div className={styles.gallery}>
    {images.map(({ url, id, description }) => (
      <img src={url} key={id} alt={description} className={styles.image} />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ),
};

export default Gallery;
