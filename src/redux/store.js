import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contacts/contactsSlice';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';

const persistConfigContacts = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};
const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedContactsReducer = persistReducer(
  persistConfigContacts,
  contactsReduser
);
const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);
export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    auth: persistedAuthReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
