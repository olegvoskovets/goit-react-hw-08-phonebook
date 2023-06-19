import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import React from 'react';

import css from '../../components/App/App.module.css';

import { selectContacts, selectVisibleForm } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { toogleVisibleForm } from 'redux/contacts/contactsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const visibleForm = useSelector(selectVisibleForm);

  const contacts = useSelector(selectContacts);

  const hendleToggleVisibleForm = () => {
    dispatch(toogleVisibleForm());
  };

  return (
    <div className={css.content}>
      <h1 className={css.content_text}>Phonebook</h1>
      <ContactForm />
      {!visibleForm && (
        <button
          className={css.new_contact_btn}
          onClick={hendleToggleVisibleForm}
        >
          new Contact
        </button>
      )}
      {contacts.length > 0 ? (
        <>
          <h2 className={css.contact}>Contacts</h2>

          <Filter />
          <ContactsList />
        </>
      ) : (
        <p>У Вас поки відсутні контакти</p>
      )}
    </div>
  );
};

export default Home;
