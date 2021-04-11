import React from 'react';
import logoMyVideo from '@images/logo-Myvideo-colors.png';
import userIcon from '@images/user-icon.png';
import '@styles/App.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={logoMyVideo} alt='My Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={userIcon} alt='' />
          <p>Profile</p>
        </div>
        <ul>
          <li><a href='/'>Account</a></li>
          <li><a href='/'>Log Out</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
