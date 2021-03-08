import { createStore } from 'redux';
import rootReducer from 'redux/reducers';

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, preloadedState)

  return store;
}