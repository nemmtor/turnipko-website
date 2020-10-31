import React, { useState } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './customImg.module.scss';

const CustomImg = ({ image }) => {
  const { fluidMobile, fluidDesktop, description } = image;
  // TODO: Probably needs to lift isfullscreen state up to gallery
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(prevState => !prevState);
  };

  // TODO: fix enter hit
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setIsFullScreen(prevState => !prevState);
    }
  };


  const sources = [
    fluidMobile,
    {
      ...fluidDesktop,
      media: `(min-width: 768px)`,
    },
  ];


  return (
    <div onClick={handleClick} onKeyDown={handleKeyDown} role="button" tabIndex={0}
         className={`${styles.container} ${isFullScreen ? styles.full : ''}`}>
      <Img fluid={sources} fadeIn={true} alt={description}
           className={`${styles.image} ${isFullScreen ? styles.imageFull : ''}`} />
    </div>
  );
};


CustomImg.propTypes = {
  image: PropTypes.shape({
    fluidMobile: PropTypes.shape({}).isRequired,
    fluidDesktop: PropTypes.shape({}).isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};


export default CustomImg;