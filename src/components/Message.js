import React, { useState } from 'react';

const Message = ({ color, show, text }) => {
  const [showAlert, setShowAlert] = useState(show);
  const handleCloseBtn = () => {
    setShowAlert(false);
  };
  if (!showAlert) {
    return <></>;
  }

  return (
    <div className='row' id='alert_box'>
      <div className='col s12 m12'>
        <div className={`card ${color} darken-1`}>
          <div className='row'>
            <div className='col s12 m10'>
              <div className='card-content white-text'>{text}</div>
            </div>
            <div className='col s12 m2' onClick={handleCloseBtn}>
              <span id='alert_close' aria-hidden='true'>
                X
              </span>
            </div>
          </div>
        </div>
      </div>
      <style jsx='true'>
        {`
          #alert_close {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 20px;
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

Message.defaultProps = {
  show: true,
  message: 'Alert!',
  color: 'red',
};

export default Message;
