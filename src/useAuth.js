import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from './store/actions/userActions';

export const useAuth = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, loading } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      // console.log('USER YOK');
      dispatch(checkAuth());
    } else {
      // console.log('USER VAR');
    }
  }, [dispatch, userInfo]);
  return { userInfo, loading };
};
