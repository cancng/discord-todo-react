import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userAuthReducer } from './reducers/userReducer';
import {
  addTodoReducer,
  deleteTodoReducer,
  markTodoReducer,
  userTodoReducer,
} from './reducers/todoReducer';

const reducers = combineReducers({
  userLogin: userAuthReducer,
  addTodo: addTodoReducer,
  userTodos: userTodoReducer,
  deleteTodo: deleteTodoReducer,
  markTodo: markTodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  // applyMiddleware(...middleware)
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
