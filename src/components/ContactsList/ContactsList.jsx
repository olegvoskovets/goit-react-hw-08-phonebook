import { useDispatch, useSelector } from 'react-redux';
import { selectFilterSearch, selectIsLoading } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import css from '../App/App.module.css';
import { Loader } from 'components/Loader/Loader';

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
