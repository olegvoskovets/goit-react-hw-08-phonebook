// import { configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contactsSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReduser,
//   },
// });
import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'contactsLokalStorage',
  storage,
  whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, contactsReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
});
export const persistor = persistStore(store);
