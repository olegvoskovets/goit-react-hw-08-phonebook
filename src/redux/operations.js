import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6489b47f5fa58521cab016a7.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunk_Api) => {
    try {
      const { data } = await axios.get('/contacts_phone');
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunk_Api) => {
    try {
      const { data } = await axios.post('/contacts_phone', contact);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunk_Api) => {
    try {
      const { data } = await axios.delete(`/contacts_phone/${id}`);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
