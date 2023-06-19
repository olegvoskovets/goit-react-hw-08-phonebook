import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import css from './ContactsList.module.css';
import { Loader } from 'components/Loader/Loader';
import { selectFilterSearch, selectIsLoading } from 'redux/contacts/selectors';

const ContactsList = () => {
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectFilterSearch);
  return (
    <>
      {isLoading && <Loader />}

      <div className={css.contacts}>
        <ul className={css.numberList}>
          {visibleContacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <span className={css.contact_name}>{contact.name}</span>
              <div className={css.number_info}>
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
