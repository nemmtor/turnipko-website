import React, { useState } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './customImg.module.scss';

const CustomImg = ({ fluid, description }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleClick = () => {
    setIsFullScreen(prevState => !prevState);
  };

  // TODO: fix enter hit
  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      setIsFullScreen(prevState => !prevState);
    }
  };
  // TODO: Probably needs to lift isfullscreen state up to gallery
  return (
    <div onClick={handleClick} onKeyPress={handleKeyPress} role="button" tabIndex={0} className={`${styles.container} ${isFullScreen ? styles.full : ''}`}>
      <Img fluid={fluid} fadeIn={true} alt={description}
           className={`${styles.image} ${isFullScreen ? styles.imageFull : ''}`} />
    </div>
  );
};

CustomImg.propTypes = {
  fluid: PropTypes.shape({}).isRequired,
  description: PropTypes.string.isRequired,
};

export default CustomImg;