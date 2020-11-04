import React from 'react';
import { Link } from 'react-router-dom';

import checkimg from '../checklist.png';

const Beginwith = () => {
  return (
    <div className='section no-pad-bot' id='index-banner'>
      <div className='container'>
        <div className='row center' style={{ marginBottom: 0 }}>
          <img src={checkimg} alt='todos' width='400' />
        </div>
        <h1
          className='header center'
          style={{ marginTop: 0, color: '#fb3728e6' }}
        >
          Todo Application
        </h1>
        <div className='row center'>
          <h5 className='header col s12 light'>
            A modern basic todo application based on Material Design
          </h5>
        </div>
        <div className='row center'>
          <Link className='btn-large waves-effect waves-light teal' to='/login'>
            Let's Start
          </Link>
        </div>
        <br />
      </div>
    </div>
  );
};

export default Beginwith;
