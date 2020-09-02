import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { autoRehydrate } from 'redux-phoenix';

import reducer from 'src/reducers';

import eventsMiddleware from 'src/Middlewares/eventsMiddleware';
import eventsAddMiddleware from 'src/Middlewares/eventsAddMiddleware';
import loginMiddleware from 'src/Middlewares/loginMiddleware';
import homeMiddleware from 'src/Middlewares/homeMiddleware';
import registerMiddleware from 'src/Middlewares/registerMiddleware';
import profilePrivateMiddleware from 'src/Middlewares/profilePrivateMiddleware';

// on combine devTools avec les middlewares
const enhancers = composeWithDevTools(
  applyMiddleware(
    eventsMiddleware,
    eventsAddMiddleware,
    loginMiddleware,
    homeMiddleware,
    registerMiddleware,
    profilePrivateMiddleware,
    // ... d'autres middlewares
  ),
  autoRehydrate,
);

const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export default store;
