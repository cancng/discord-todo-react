import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import { logout } from '../store/actions/userActions';

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const sideNavRef = useRef();
  const handleLogout = () => {
    dispatch(logout());
    window.location.reload();
  };
  useEffect(() => {
    M.Sidenav.init(sideNavRef.current, {});
  }, [userInfo]);
  return (
    <>
      <div className='navbar-fixed'>
        <nav className='red'>
          <div className='container'>
            <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>
                DiscTodo
              </Link>
              {/* eslint-disable-next-line */}
              <a href='#' className='sidenav-trigger' data-target='mobile-nav'>
                <i className='material-icons'>menu</i>
              </a>
              <ul className='right hide-on-med-and-down'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                {userInfo && (
                  <>
                    <li>
                      <Link to='/todos'>Todos</Link>
                    </li>
                    <li>
                      <Link to='/notes'>My Notes</Link>
                    </li>
                    <li>
                      <Link to='/profile'>Profile</Link>
                    </li>
                  </>
                )}
                <li>
                  {userInfo ? (
                    <a onClick={handleLogout}>Logout</a>
                  ) : (
                    <Link to='/login'>Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <ul className='sidenav' id='mobile-nav' ref={sideNavRef}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {userInfo && (
          <>
            <li>
              <Link to='/todos'>Todos</Link>
            </li>
            <li>
              <Link to='/notes'>My Notes</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          </>
        )}
        <li>
          {userInfo ? (
            <a onClick={handleLogout}>Logout</a>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </li>
      </ul>
    </>
  );
};

export default Header;
