import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './gallery.module.scss';
import CustomImg from '../customImg/customImg';
import FullScreenImage from '../fullScreenImage/fullScreenImage';

// TODO: move handleNext, prev and close to reducer, than reducer goes to throttle
const Gallery = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);


  const handleClick = (image) => {
    const index = images.indexOf(image);
    setIsFullScreen(prevState => !prevState);
    setCurrentImageIndex(index);
  };

  const handleNext = () => {
    const max = images.length - 1;
    const nextIndex = currentImageIndex + 1;
    if (nextIndex > max) {
      setCurrentImageIndex(0);
      return;
    }
    setCurrentImageIndex(nextIndex);
  };

  const handlePrev = () => {
    const min = 0;
    const prevIndex = currentImageIndex - 1;
    if (prevIndex < min) {
      setCurrentImageIndex(images.length - 1);
      return;
    }
    setCurrentImageIndex(prevIndex);
  };


  return (
    <div className={styles.gallery} >
      {images.map((image) => (
        <CustomImg image={image} key={image.id} handleClick={handleClick} />
      ))}
      {isFullScreen && <FullScreenImage image={images[currentImageIndex]} close={() => {
        setIsFullScreen(false);}}
        handlePrev={handlePrev}
        handleNext={handleNext}
       />}
    </div>);
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    fluidMobile: PropTypes.shape({}).isRequired,
    fluidDesktop: PropTypes.shape({}).isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired),
};


export default Gallery;
