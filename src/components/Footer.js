import React from 'react';

const Footer = () => {
  return (
    <footer className='section grey darken-2 white-text center'>
      <p className='flow-text'>
        Discord Todo &copy; {new Date().getFullYear()}
      </p>
      <p>Version 0.0.70478243293280</p>
    </footer>
  );
};

export default Footer;
