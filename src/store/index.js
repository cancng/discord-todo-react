import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { userAuthReducer } from './reducers/userReducer';
import {
  addTodoReducer,
  deleteTodoReducer,
  markTodoReducer,
  userTodoReducer,
} from './reducers/todoReducer';
import {
  addNoteReducer,
  deleteNoteReducer,
  userNoteReducer,
  userNotesReducer,
} from './reducers/noteReducer';

const reducers = combineReducers({
  userLogin: userAuthReducer,
  userTodos: userTodoReducer,
  addTodo: addTodoReducer,
  deleteTodo: deleteTodoReducer,
  markTodo: markTodoReducer,
  userNotes: userNotesReducer,
  userNote: userNoteReducer,
  addNote: addNoteReducer,
  deleteNote: deleteNoteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(...middleware)
  // composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
