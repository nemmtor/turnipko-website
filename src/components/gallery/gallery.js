import React from 'react';
import PropTypes from 'prop-types';

import styles from './gallery.module.scss';
import CustomImg from '../customImg/customImg';

const Gallery = ({ images }) => (
  <div className={styles.gallery}>
    {images.map((image) => (
      <CustomImg image={image} key={image.id} />
    ))}
  </div>);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    fluidMobile: PropTypes.shape({}).isRequired,
    fluidDesktop: PropTypes.shape({}).isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired),
};


export default Gallery;
