import { applyMiddleware, createStore, compose as originalCompose } from 'redux';
import createSagaMiddleware from 'redux-saga';

function getReduxCompose() {
  return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : originalCompose;
}

export default function configureStore(rootReducer) {
  const sagaMiddleware = createSagaMiddleware();

  const compose = getReduxCompose();
  const store = createStore(rootReducer, {}, compose(
    applyMiddleware(sagaMiddleware)));

  store.runSaga = sagaMiddleware.run;
  return store;
}

