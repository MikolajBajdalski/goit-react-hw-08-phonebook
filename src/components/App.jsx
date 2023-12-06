import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { fetchContacts } from '../store/contactsAPI';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Register from './Register/Register';
import Login from './Login/Login';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/contacts"
          element={
            <>
              <h1>Phonebook</h1>
              <ContactForm />
              <ContactList />
              <Filter />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
