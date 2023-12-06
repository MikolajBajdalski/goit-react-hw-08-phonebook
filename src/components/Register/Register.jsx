// src/components/Register/Register.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../store/authSlice';

const Register = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector(state => state.auth);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(register(userData))
      .unwrap()
      .then(() => {
        navigate('/contacts'); // Przekierowanie do listy kontaktów po udanej rejestracji
      })
      .catch(error => {
        // Error handling is already set up in the authSlice, so no action needed here
      });
  };

  return (
    <div>
      <h2>Register</h2>
      {status === 'failed' && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Registering...' : 'Register'}
        </button>
      </form>
      <p>
        Masz już konto?
        <Link to="/login"> Zaloguj się!</Link>
      </p>
    </div>
  );
};

export default Register;
