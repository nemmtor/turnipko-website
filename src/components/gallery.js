import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomImg from './customImg/customImg';
import FullScreenImage from './fullScreenImage/fullScreenImage';

// TODO: move handleNext, prev and close to reducer, than reducer goes to throttle
const Gallery = ({ images }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [image, setImage] = useState(null);


  const handleClick = (image) => {
    setIsFullScreen(prevState => !prevState);
    setImage(image);
  };

  return (
    <div className="flex flex-wrap flex-jsa ">
      {images.map((image) => (
        <CustomImg image={image} key={image.id} handleClick={handleClick} />
      ))}
      {isFullScreen && <FullScreenImage image={image} close={() => {
        setIsFullScreen(false);
      }}
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
