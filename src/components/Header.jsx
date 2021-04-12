import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logoMyVideoBW from '@images/logo-Myvideo-BW2.png';
import userIcon from '@images/user-icon.png';
import gravatar from '@utils/gravatar';
import { logoutUser } from '../actions';
import '@styles/components/Header.scss';

const Header = (props) => {
  const { user } = props;
  const hasUSer = Object.keys(user).length > 0;

  const handleLogOut = () => {
    props.logoutUser(user);
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logoMyVideoBW} alt='My Video' />
      </Link>

      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={hasUSer ? gravatar(user.email) : userIcon} alt='profile-avatar' />
          <p>{hasUSer ? user.email : 'Profile'}</p>
        </div>
        {hasUSer ? (
          <ul>
            <li><a href='/'>Account</a></li>
            <li><Link to='/login' onClick={handleLogOut}>Log Out</Link></li>
          </ul>
        ) : (
          <ul>
            <li><Link to='/login'>Log In</Link></li>
          </ul>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
