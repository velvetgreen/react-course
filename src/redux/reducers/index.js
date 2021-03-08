import { combineReducers } from 'redux';

import chatsReducer from './chats';
import messagesReducer from './messages';
import userReducer from './user';

const rootReducer = combineReducers({
  chats: chatsReducer,
  messagesStore: messagesReducer,
  user: userReducer,
});

export default rootReducer;