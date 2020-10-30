import {
  USER_CHECK_AUTH_FAIL,
  USER_CHECK_AUTH_REQUEST,
  USER_CHECK_AUTH_SUCCESS,
  USER_LOGOUT,
} from '../constants/userConstants';

export const userAuthReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CHECK_AUTH_REQUEST:
      return { loading: true };
    case USER_CHECK_AUTH_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_CHECK_AUTH_FAIL:
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
