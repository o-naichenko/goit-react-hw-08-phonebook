import { createAsyncThunk } from '@reduxjs/toolkit';
import { serverAPI } from 'server-API';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await serverAPI.fetchContacts();
      return contacts;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const postedContact = await serverAPI.postContact(newContact);
      return postedContact;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await serverAPI.deleteContact(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
