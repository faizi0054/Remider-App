import React from 'react';
const Main = ({ onLogout }) => {
  return (
    <div>
      <h1 className='app-title'>Reminder App</h1>
      <button className='logout' onClick={onLogout}>
        LOGOUT
      </button>
    </div>
  );
};

export default Main;
