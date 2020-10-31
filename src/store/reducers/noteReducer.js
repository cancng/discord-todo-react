import {
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  GET_USER_NOTES_REQUEST,
  GET_USER_NOTES_SUCCESS,
  GET_USER_NOTES_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  GET_USER_NOTE_REQUEST,
  GET_USER_NOTE_SUCCESS,
  GET_USER_NOTE_FAIL,
} from '../constants/noteConstants';

export const addNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE_REQUEST:
      return {
        loading: true,
      };
    case ADD_NOTE_SUCCESS:
      return {
        loading: false,
        success: true,
        note: action.payload,
        error: '',
      };
    case ADD_NOTE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userNotesReducer = (
  state = { notes: [], loading: false },
  action
) => {
  switch (action.type) {
    case GET_USER_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_NOTES_SUCCESS:
      return {
        loading: false,
        notes: action.payload,
      };
    case GET_USER_NOTES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_NOTE_REQUEST:
      return {
        loading: true,
      };
    case GET_USER_NOTE_SUCCESS:
      return {
        loading: false,
        note: action.payload,
      };
    case GET_USER_NOTE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_NOTE_REQUEST:
      return {
        loading: true,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case DELETE_NOTE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
