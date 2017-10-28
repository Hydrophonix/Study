import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// import { ..... } from '../actions';

import rootReducer from '../reducers';



// const startCounting = store => next => action => {
//   const result = next(action);
//
//   store.dispatch(foo(.....));
//
//   return result;
// };


export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);
