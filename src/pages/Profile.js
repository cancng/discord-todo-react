import React from 'react';
import { AiFillCloseCircle, AiFillCheckCircle } from 'react-icons/ai';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useAuth } from '../useAuth';

const Profile = () => {
  const { userInfo, loading } = useAuth();

  return (
    <div className='section'>
      <div className='container' style={{ marginTop: 20 }}>
        <div className='row'>
          {loading ? (
            <div className='center'>
              <Loader />
            </div>
          ) : !userInfo ? (
            <Message text='Unauthorized access' />
          ) : (
            <>
              <div className='col s12 m6 center'>
                <img
                  src={userInfo.avatarURL}
                  className='circle responsive-img'
                  alt='discord profile'
                />
              </div>
              <div className='col s12 m6'>
                <ul className='collection with-header'>
                  <li className='collection-header'>
                    <h4>Discord Account</h4>
                  </li>
                  <li className='collection-item'>ID: {userInfo.discordId}</li>
                  <li className='collection-item'>
                    Username: {userInfo.username}
                  </li>
                  <li className='collection-item'>Email: {userInfo.email}</li>
                  <li className='collection-item discord-status'>
                    Verified:{' '}
                    {userInfo.verified ? (
                      <AiFillCheckCircle color='green' size={20} />
                    ) : (
                      <AiFillCloseCircle color='red' size={20} />
                    )}
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx='true'>
        {`
          .discord-status {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;
