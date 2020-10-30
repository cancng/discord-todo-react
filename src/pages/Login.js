import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useAuth } from '../useAuth';

const Login = () => {
  const history = useHistory();

  const { userInfo } = useAuth();
  useEffect(() => {
    if (userInfo) {
      history.push('/todos');
    }
  }, [history, userInfo]);
  return (
    <div className='section'>
      <div className='container'>
        <div className='row center'>
          <div className='card-panel'>
            <h2>Login & Signup</h2>
            <a
              href={`${process.env.REACT_APP_API_URL}/auth`}
              className='waves-effect waves-light btn-large'
            >
              Continue with Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
