import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './customImg.module.scss';
import getSources from '../../utils/getSources';


const CustomImg = ({ image, handleClick, openFullScreen }) => {
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
      openFullScreen();
      document.querySelector('body').classList.add('no-scroll');
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

const mapDispatchToProps = dispatch => {
  return { openFullScreen: () => dispatch({ type: 'OPEN' }) };
};


export default connect(null, mapDispatchToProps)(CustomImg);