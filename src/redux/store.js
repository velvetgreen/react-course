import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'redux/reducers';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   
  const store = createStore(persistedReducer, preloadedState,composeEnhancers(applyMiddleware(thunk)));
  const persistor = persistStore(store)

  return {
    store,
    persistor
  };
}

