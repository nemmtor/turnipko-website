import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import styles from './gallery.module.scss';
import CustomImg from '../customImg/customImg';
import FullScreenImage from '../fullScreenImage/fullScreenImage';

const initialState = { isFullScreen: false, currentImageIndex: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'NEXT':
      if (action.payload) {
        const { nextIndex } = action.payload;
        return { ...state, currentImageIndex: nextIndex };
      } else {
        return initialState;
      }

    case 'PREV':
      if (action.payload) {
        const { prevIndex } = action.payload;
        return { ...state, currentImageIndex: prevIndex };
      } else {
        return initialState;
      }

    case 'OPEN':
      if (action.payload) {
        const { index } = action.payload;
        return { isFullScreen: true, currentImageIndex: index };
      } else {
        return initialState;
      }

    case 'CLOSE':
      return initialState;

    default:
      throw new Error('NO DEFAULT CASE REDUCER');
  }
};

// TODO: move handleNext, prev and close to reducer, than reducer goes to throttle
const Gallery = ({ images }) => {

  const [state, dispatch] = useReducer(reducer, initialState, () => initialState);


  const handleOpen = (id) => {
    const image = images.filter(image => image.id === id)[0];
    const index = images.indexOf(image);
    dispatch({ type: 'OPEN', payload: { index } });
  };

  const handleNext = () => {
    const possibleNextIndex = state.currentImageIndex + 1;
    let nextIndex;
    if (possibleNextIndex > images.length - 1){
      nextIndex = 0;
    } else {
      nextIndex = possibleNextIndex;
    }
    dispatch({type: 'NEXT', payload: {nextIndex}})
  }

  const handlePrev = () => {
    const possiblePrevIndex = state.currentImageIndex - 1;
    let prevIndex;
    if (possiblePrevIndex < 0){
      prevIndex = images.length -1;
    } else {
      prevIndex = possiblePrevIndex;
    }
    dispatch({type: 'NEXT', payload: {prevIndex}})
  }

  const handleClose = () => {
    dispatch({ type: 'CLOSE' });
  };

  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <CustomImg image={image} key={image.id} handleOpen={handleOpen} />
      ))}
      {isFullScreen && <FullScreenImage image={images[currentImageIndex]} close={() => {
        setIsFullScreen(false);
      }} handlePrev={handlePrev} handleNext={handleNext} />}
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
