import axios from 'axios';
import {
  ADD_NOTE_FAIL,
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  GET_USER_NOTES_FAIL,
  GET_USER_NOTES_REQUEST,
  GET_USER_NOTES_SUCCESS,
  GET_USER_NOTE_FAIL,
  GET_USER_NOTE_REQUEST,
  GET_USER_NOTE_SUCCESS,
} from '../constants/noteConstants';

export const addNote = ({ title, text }) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_NOTE_REQUEST,
    });

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/note/create`,
      { title, text },
      { withCredentials: true }
    );
    dispatch({
      type: ADD_NOTE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_NOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNotes = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_NOTES_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/note`, {
      withCredentials: true,
    });
    dispatch({
      type: GET_USER_NOTES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_NOTES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getNote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_NOTE_REQUEST,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/note/${id}`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: GET_USER_NOTE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_NOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_NOTE_REQUEST,
    });
    await axios.delete(`${process.env.REACT_APP_API_URL}/note/${id}`, {
      withCredentials: true,
    });
    dispatch({
      type: DELETE_NOTE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_NOTE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
