import React from 'react';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const isLoggedIn = useSelector(state => !!state.auth.token);

  return (
    <nav>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </nav>
  );
};

export default NavigationBar;
