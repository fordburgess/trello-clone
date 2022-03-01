import React from 'react';
import { LogoutButton } from './Auth0';

const Header = () => {
  return <div className='header'>
    <div className='header-div-left'>
      <h1>Trello Clone</h1>
    </div>
    <div className='header-div-right'>
      <a href="#" className='header-link'>Settings</a>
      <a href="#" className='header-link'>Placeholder</a>
      <LogoutButton />
    </div>
  </div>;
};

export default Header;
