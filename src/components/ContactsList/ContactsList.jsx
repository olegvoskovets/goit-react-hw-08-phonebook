import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, fetchContacts } from 'redux/contacts/operations';

import css from '../App/App.module.css';
import { Loader } from 'components/Loader/Loader';
import { selectFilterSearch, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectFilterSearch);
  return (
    <>
      {isLoading && <Loader />}
      <div className={css.contacts}>
        <ul className={css.numberList}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <span>{contact.name}</span>
              <div>
                <span className={css.number}> : {contact.number}</span>
                <button
                  className={css.deleteBtn}
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactsList;
