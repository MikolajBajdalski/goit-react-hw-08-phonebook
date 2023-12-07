import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

const Contacts = () => {
  return (
    <>
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default Contacts;
