// This is where you apply middleware and define the redux
// dev tools as attached to the redux store

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../Reducers';

export default (initialState) => {
  const middlewareEnhancer = compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );

  return createStore(rootReducer, initialState, middlewareEnhancer);
};
