import css from './App.module.css';

import ContactsList from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.content}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contact}>Contacts</h2>

      <Filter />

      <ContactsList />
    </div>
  );
};
