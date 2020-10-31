import React from 'react';
import PropTypes from 'prop-types';

import styles from './gallery.module.scss';
import CustomImg from '../customImg/customImg';

const Gallery = ({ images }) => (
  <div className={styles.gallery}>
    {images.map(({ fluid, id, description }) => (
      <CustomImg fluid={fluid} key={id} description={description} />
    ))}
  </div>);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    fluid: PropTypes.shape({}).isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired),
};

export default Gallery;
