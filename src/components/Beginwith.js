import React from 'react';
import { Link } from 'react-router-dom';

const Beginwith = () => {
  return (
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <br />
        <h1 className='header center orange-text'>Todo Application</h1>
        <div className='row center'>
          <h5 className='header col s12 light'>
            A modern basic todo application based on Material Design
          </h5>
        </div>
        <div className='row center'>
          <Link
            className='btn-large waves-effect waves-light orange'
            to='/login'
          >
            Lets Start
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Beginwith;
