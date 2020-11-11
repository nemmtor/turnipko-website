import { createStore as reduxCreateStore } from 'redux';

const initialState = { isFullScreen: false };

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN':
      return { isFullScreen: true };
    case 'CLOSE':
      return {isFullScreen: false};
    default:
      return state;
  }
};


const createStore = () => reduxCreateStore(reducer, initialState);
export default createStore;