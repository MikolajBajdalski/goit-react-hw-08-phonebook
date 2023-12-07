import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar/NavigationBar';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { fetchContacts } from '../store/contactsAPI';

import Register from './Register/Register';
import Login from './Login/Login';
import Contacts from './Contacts/Contacts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
