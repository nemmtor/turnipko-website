import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import styles from './fullScreenImage.module.scss';
import getSources from '../../utils/getSources';

// TODO: Close with escape
const FullScreenImage = ({ image, close }) => {
  const sources = getSources(image);


  return <div className={styles.container} role="none">
      <Img fluid={sources} alt={image.description} className={styles.image} />

    <button className={styles.close} onClick={close}>
      Close
    </button>
  </div>;
};

FullScreenImage.propTypes = {
  image: PropTypes.shape({}).isRequired,
  close: PropTypes.func.isRequired,
};

export default FullScreenImage;