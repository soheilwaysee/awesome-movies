import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import fetchReduxMiddleware from './fetchReduxMiddleware';

const storeConfig = initialState => {
  const middlewares = [fetchReduxMiddleware];
  const composeEnhancers =
    (process.env.NODE_ENV &&
      typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  const enhancers = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(rootReducer, initialState || {}, enhancers);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      try {
        const nextRootReducer = require('./rootReducer').default;
        store.replaceReducer(nextRootReducer);
      } catch (error) {
        console.error(`Reducer hot reloading error ${error}`);
      }
    });
  }

  return store;
};

export default storeConfig;
