import React from 'react';

const HomeBoxes = () => {
  return (
    <section className='section grey lighten-4 center'>
      <div className='container'>
        <div className='row'>
          <div className='col s12 m4'>
            <div className='card-panel'>
              <i className='material-icons large'>
                how_to_reg
              </i>
              <h4>Discord</h4>
              <p>Login easily using Discord OAuth Authentication</p>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card-panel'>
              <i className='material-icons large'>done_all</i>
              <h4>List Todos</h4>
              <p>Add your todos and prepare yourself to work.</p>
            </div>
          </div>
          <div className='col s12 m4'>
            <div className='card-panel'>
              <i className='material-icons large'>assignment</i>
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
