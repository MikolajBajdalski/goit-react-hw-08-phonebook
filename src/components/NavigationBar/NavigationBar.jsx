// Przykładowy komponent, który może zawierać UserMenu, np. NavigationBar.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import UserMenu from './UserMenu/UserMenu';

const NavigationBar = () => {
  const isLoggedIn = useSelector(state => !!state.auth.token);

  return <nav>{isLoggedIn && <UserMenu />}</nav>;
};

export default NavigationBar;
