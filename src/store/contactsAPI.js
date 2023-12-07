import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://65678bce64fcff8d731090f3.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async userId => {
    const response = await axios.get(`${API_URL}/users/${userId}/contacts`);
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ userId, contact }) => {
    const response = await axios.post(
      `${API_URL}/users/${userId}/contacts`,
      contact
    );
    return response.data;
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ userId, id, contact }) => {
    const response = await axios.put(
      `${API_URL}/users/${userId}/contacts/${id}`,
      contact
    );
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async ({ userId, id }) => {
    await axios.delete(`${API_URL}/users/${userId}/contacts/${id}`);
    return id;
  }
);
