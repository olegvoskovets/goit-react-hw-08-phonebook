import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    axiosUser.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosUser.defaults.headers.common.Authorization = '';
  },
};

export const registrationUser = createAsyncThunk(
  'user/signUp',
  async (user, thunk_Api) => {
    try {
      const { data } = await axiosUser.post('users/signup', user);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunkAPI.rejectWithValue('No token');
    }
    try {
      token.set(persistToken);
      const { data } = await axiosUser.get('users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const userLogOut = createAsyncThunk(
  'user/logOut',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistToken = state.auth.token;
    if (!persistToken) {
      return thunkAPI.rejectWithValue('No token');
    }
    try {
      token.set(persistToken);
      const { data } = await axiosUser.post('users/logout');

      console.log('DATA ', data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunk_Api) => {
    try {
      const { data } = await axiosUser.post('users/login', user);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
