import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from './contactsAPI';

const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    clearContacts: state => {
      state.contacts = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        if (index !== -1) {
          state.contacts[index] = action.payload;
        }
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      });
  },
});

export const { clearContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
