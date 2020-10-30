import axios from 'axios';
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

export const addTodo = (todoText) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_TODO_REQUEST,
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/todo/create`,
      { todoText },
      { withCredentials: true }
    );
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUserTodos = (page = '') => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_TODOS_REQUEST,
    });
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/todo?page=${page}`, {
      withCredentials: true,
    });
    dispatch({
      type: GET_USER_TODOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_TODOS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TODO_REQUEST,
    });
    await axios.delete(`${process.env.REACT_APP_API_URL}/todo/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: DELETE_TODO_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const markTodo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: MARK_TODO_REQUEST,
    });
    await axios.post(
      `${process.env.REACT_APP_API_URL}/todo/mark/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: MARK_TODO_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: MARK_TODO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
