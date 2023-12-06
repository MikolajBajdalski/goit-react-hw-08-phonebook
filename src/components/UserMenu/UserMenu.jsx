// src/components/UserMenu/UserMenu.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user?.email);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <span>{email}</span>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
