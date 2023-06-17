import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

import css from '../../components/App/App.module.css';

const Home = () => {
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

export default Home;
