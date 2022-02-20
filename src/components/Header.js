import React from 'react';
import LoginButton from './LoginButton';

const Header = () => {
  return <div className='header'>
    <div className='header-div-left'>
      <h1>Trello Clone</h1>
    </div>
    <div className='header-div-right'>
      <a href="#" className='header-link'>Settings</a>
      <a href="#" className='header-link'>Placeholder</a>
      <a href="#" className='header-link'>Log Out</a>
      <LoginButton />
    </div>
  </div>;
};

export default Header;
