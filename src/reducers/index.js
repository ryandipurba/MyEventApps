import { combineReducers } from 'redux';

import eventsReducer from './events.js';

const rootReducer = combineReducers({
  events: eventsReducer,
});

export default rootReducer;
