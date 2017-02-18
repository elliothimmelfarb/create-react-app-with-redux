import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

export default (initialState) => {

  const middlewareEnhancer = compose(
    applyMiddleware(reduxThunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )

  return createStore(rootReducer, initialState, middlewareEnhancer);
};
