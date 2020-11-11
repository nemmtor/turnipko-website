import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './fullScreenImage.module.scss';
import getSources from '../../utils/getSources';

// TODO: Close with escape
// TODO: Add navigation with arrows + keyboard nav
const FullScreenImage = ({ image, closeFullScreen }) => {
  const sources = getSources(image);


  return <div className={styles.container} role="none">
    <Img fluid={sources} alt={image.description} className={styles.image} />

    <button className={styles.close} onClick={(e) => {
      e.stopPropagation();
      closeFullScreen();
      document.querySelector('body').classList.remove('no-scroll');
    }}>
      Close
    </button>
  </div>;
};

FullScreenImage.propTypes = {
  image: PropTypes.shape({}).isRequired,
  closeFullScreen: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  closeFullScreen: () => dispatch({ type: 'CLOSE' }),
})

export default connect(null, mapDispatchToProps)(FullScreenImage);