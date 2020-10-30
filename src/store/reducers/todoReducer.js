import {
  ADD_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  GET_USER_TODOS_FAIL,
  GET_USER_TODOS_REQUEST,
  GET_USER_TODOS_SUCCESS,
  MARK_TODO_FAIL,
  MARK_TODO_REQUEST,
  MARK_TODO_SUCCESS,
} from '../constants/todoConstants';

export const addTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO_REQUEST:
      return {
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        loading: false,
        success: true,
        todo: action.payload,
      };
    case ADD_TODO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userTodoReducer = (
  state = { todos: [], loading: false },
  action
) => {
  switch (action.type) {
    case GET_USER_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_TODOS_SUCCESS:
      return {
        loading: false,
        todos: action.payload.todos,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case GET_USER_TODOS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TODO_REQUEST:
      return {
        loading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_TODO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const markTodoReducer = (state = {}, action) => {
  switch (action.type) {
    case MARK_TODO_REQUEST:
      return {
        loading: true,
      };
    case MARK_TODO_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case MARK_TODO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
