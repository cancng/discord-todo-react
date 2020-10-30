import React from 'react';
import { FaCheckDouble, FaDiscord } from 'react-icons/fa';
import { GrWorkshop } from 'react-icons/gr';

const HomeBoxes = () => {
  return (
    <section className='section grey lighten-4 center'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <div className='card-panel'>
              {/* <i className='material-icons large red-text darken-4'>3d_rotation</i> */}
              <FaDiscord size={87} className='blue-text' />
              <h4>Discord</h4>
              <p>Login easily using Discord OAuth Authentication</p>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card-panel'>
              <FaCheckDouble size={87} className='deep-purple-text' />
              <h4>List Todos</h4>
              <p>Add your todos and prepare yourself to work.</p>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card-panel'>
              <GrWorkshop size={87} />
              <h4>Works</h4>
              <p>Organize works, for your work life balance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBoxes;
