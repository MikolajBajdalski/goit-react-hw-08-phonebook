// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import authReducer from './authSlice'; // Import nowego reducera

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer, // Dodaj reducer do store
  },
});
