import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//axios.defaults.baseURL = 'https://6489b47f5fa58521cab016a7.mockapi.io';

const axiosContacts = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    axiosContacts.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosContacts.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunk_Api) => {
    const state = thunk_Api.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunk_Api.rejectWithValue('No token');
    }
    try {
      token.set(persistToken);
      const { data } = await axiosContacts.get('contacts');
      console.log('DATA Contacts', data);
      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunk_Api) => {
    const state = thunk_Api.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunk_Api.rejectWithValue('No token');
    }
    try {
      token.set(persistToken);
      const { data } = await axiosContacts.post('contacts', contact);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunk_Api) => {
    const state = thunk_Api.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunk_Api.rejectWithValue('No token');
    }
    try {
      token.set(persistToken);
      const { data } = await axiosContacts.delete(`contacts/${id}`);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
