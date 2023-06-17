import { createSlice } from '@reduxjs/toolkit';
import {
  loginUser,
  refreshUser,
  registrationUser,
  userLogOut,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  isLoggedIn: false,
  isRefresher: false,
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registrationUser.pending, state => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(registrationUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload.error;
        state.isRefresher = false;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
        state.isError = '';
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload.error;
        state.isRefresher = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isLoading = true;
        state.isError = '';
        state.isRefresher = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        //state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isRefresher = false;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload.error;
        state.isRefresher = false;
      })
      .addCase(userLogOut.pending, state => {
        state.isError = '';
      })
      .addCase(userLogOut.fulfilled, (state, { payload }) => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isRefresher = false;
        state.token = '';
      })
      .addCase(userLogOut.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload.error;
        state.isRefresher = false;
      });
  },
});

export const authReducer = authSlice.reducer;
