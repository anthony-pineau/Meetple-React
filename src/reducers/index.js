import { combineReducers } from 'redux';

// on importe tous les reducers
import eventsReducer from './event';
import loginReducer from './login';
import homeReducer from './home';
import registerReducer from './register';
import createEventReducer from './create-event';
import profilePrivateReducer from './profile-private';

const rootReducer = combineReducers({
  events: eventsReducer,
  login: loginReducer,
  home: homeReducer,
  register: registerReducer,
  createEvent: createEventReducer,
  profilePrivate: profilePrivateReducer,
});

export default rootReducer;
