import React, { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
//import { nanoid } from '@reduxjs/toolkit';
//import { addContact } from 'redux/contactsSlice';
import { selectContacts, selectVisibleForm } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { toogleVisibleForm } from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const contacts = useSelector(selectContacts);
  const visibleForm = useSelector(selectVisibleForm);
  const dispatch = useDispatch();

  const handleChange = e => {
    setContact(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const checkName = name => {
    return contacts.find(contact => contact.name === name);
  };

  const handleSubmitaddContact = e => {
    e.preventDefault();
    if (checkName(contact.name)) {
      setContact({
        name: '',
        number: '',
      });
      alert('Такий контакт існує ...');

      return;
    }

    const newContact = contact;
    // contact.id = nanoid();
    dispatch(addContact(newContact));
    setContact({
      name: '',
      number: '',
    });
  };

  const closeForm = () => {
    dispatch(toogleVisibleForm());
  };

  return (
    visibleForm && (
      <form className={css.form} onSubmit={handleSubmitaddContact}>
        <span className={css.close_form} onClick={closeForm}>
          Close
        </span>
        <label className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
            value={contact.name}
            onChange={handleChange}
          />
        </label>
        <label className={css.label}>
          Telefon
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder="Telefon"
            required
            value={contact.number}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    )
  );
};
