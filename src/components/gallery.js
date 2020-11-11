import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomImg from './customImg/customImg';
import FullScreenImage from './fullScreenImage/fullScreenImage';
import { connect } from 'react-redux';

const Gallery = ({ images, isFullScreen }) => {
  const [image, setImage] = useState(null);


  const handleClick = (image = null) => {
    setImage(image);
  };

  return (
    <div className="flex flex-wrap flex-jsa mb">
      {images.map((image) => (
        <CustomImg image={image} key={image.id} handleClick={handleClick} />
      ))}
      {isFullScreen && <FullScreenImage image={image} />}
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

const mapStateToProps = ({ isFullScreen }) => ({isFullScreen});

export default connect(mapStateToProps)(Gallery);
