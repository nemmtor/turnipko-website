import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './fullScreenImage.module.scss';
import getSources from '../../utils/getSources';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

// TODO: Navigate with arrows, close with escape
const FullScreenImage = ({ image, close, handlePrev, handleNext }) => {
  const sources = getSources(image);


  return <div className={styles.container} role="none">
      <Img fluid={sources} alt={image.description} className={styles.image} />
    <button className={`${styles.arrowContainer} ${styles.arrowContainerLeft}`} onClick={handlePrev}>
      <img src={arrowLeft} alt="Go backwards" />
    </button>
    <button className={`${styles.arrowContainer} ${styles.arrowContainerRight}`} onClick={handleNext}>
      <img src={arrowRight} alt="Go forward" />
    </button>

    <button className={styles.close} onClick={close}>
      <span>x</span>
    </button>
  </div>;
};

FullScreenImage.propTypes = {
  image: PropTypes.shape({}).isRequired,
  close: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};

export default FullScreenImage;