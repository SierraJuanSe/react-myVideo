import React from 'react';
import logoMyVideoBW from '@images/logo-Myvideo-BW2.png';
import userIcon from '@images/user-icon.png';
import '@styles/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <img className='header__img' src={logoMyVideoBW} alt='My Video' />
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
