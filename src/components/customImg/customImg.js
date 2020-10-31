import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './customImg.module.scss';
import getSources from '../../utils/getSources';


const CustomImg = ({ image, handleClick }) => {
  const { description } = image;
  const sources = getSources(image);

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleClick(image);
    }
  };

  return (
    <div role="button" tabIndex={0} onClick={() => {
      handleClick(image);
    }}
         onKeyDown={handleKeyDown}
         className={styles.container}>
      <Img fluid={sources} fadeIn={true} alt={description}
           className={styles.image} />
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
  handleClick: PropTypes.func.isRequired,
};


export default CustomImg;