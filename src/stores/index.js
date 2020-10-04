import React, { Component, useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from '../sagas/rootSaga';

// create a store creator
let store;

const sagaMiddleware = createSagaMiddleware();

function initStore(preloadedState = {}) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
}

// sagaMiddleware.run(rootSaga);

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
