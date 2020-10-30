import axios from 'axios';
import {
  USER_CHECK_AUTH_FAIL,
  USER_CHECK_AUTH_REQUEST,
  USER_CHECK_AUTH_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

export const checkAuth = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_CHECK_AUTH_REQUEST,
    });
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/auth/user`,
      {
        withCredentials: true,
      },
    );
    dispatch({
      type: USER_CHECK_AUTH_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: USER_CHECK_AUTH_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGOUT });
    await axios.get(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      withCredentials: true,
    });
  } catch (err) {
    console.log('logout');
  }
};
