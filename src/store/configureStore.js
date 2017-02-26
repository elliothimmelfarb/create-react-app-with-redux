// This is where you apply middleware and define the redux
// dev tools as attached to the redux store

import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../Reducers';
import DB from '../DB';

// initialize pouchdb database and export custom object with
// local db and remote url. Check index.js in /DB/ directory
export const db = DB('start');

export default (initialState) => {
  const middlewareEnhancer = compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  );

  return createStore(rootReducer, initialState, middlewareEnhancer);
};
