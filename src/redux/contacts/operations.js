import { createAsyncThunk } from '@reduxjs/toolkit';
import { Api } from 'redux/api/Api';
import { token } from 'redux/api/Api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunk_Api) => {
    const state = thunk_Api.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunk_Api.rejectWithValue('No token');
    }
    try {
      const { data } = await Api.get('contacts');

      return data;
    } catch (error) {
      token.unset();
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunk_Api) => {
    try {
      const { data } = await Api.post('contacts', contact);

      return data;
    } catch (error) {
      token.unset();
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunk_Api) => {
    try {
      const { data } = await Api.delete(`contacts/${id}`);

      return data;
    } catch (error) {
      token.unset();
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
