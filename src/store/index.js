import { combineReducers } from 'redux';
import todo from './modules/todo';
import board from './modules/board';

export default combineReducers({
  todo,
  board,
});
