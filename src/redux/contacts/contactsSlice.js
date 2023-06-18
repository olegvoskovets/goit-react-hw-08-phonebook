import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  isError: null,
  visibleForm: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getFilter(state, action) {
      state.filter = action.payload;
    },
    toogleVisibleForm(state) {
      state.visibleForm = !state.visibleForm;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts.push(action.payload);
      state.visibleForm = !state.visibleForm;
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.isError = null;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { getFilter, toogleVisibleForm } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
