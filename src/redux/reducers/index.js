import { combineReducers } from 'redux';
import chatsReducer from './chats';
import messagesReducer from './messages';
import userReducer from './user';
import dataReducer from "./api";

const rootReducer = combineReducers({
  chats: chatsReducer,
  messagesStore: messagesReducer,
  user: userReducer,
  data: dataReducer,
});

export default rootReducer;