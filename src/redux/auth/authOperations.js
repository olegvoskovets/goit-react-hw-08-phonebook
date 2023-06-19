import { createAsyncThunk } from '@reduxjs/toolkit';

import { Api } from 'redux/api/Api';
import { token } from 'redux/api/Api';

export const registrationUser = createAsyncThunk(
  'user/signUp',
  async (user, thunk_Api) => {
    try {
      const { data } = await Api.post('users/signup', user);

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
      const { data } = await Api.get('users/current');
      return data;
    } catch (err) {
      token.unset();
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
      const { data } = await Api.post('users/logout');

      return data;
    } catch (error) {
      token.unset();
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async (user, thunk_Api) => {
    try {
      const { data } = await Api.post('users/login', user);

      return data;
    } catch (error) {
      return thunk_Api.rejectWithValue(error.message);
    }
  }
);
