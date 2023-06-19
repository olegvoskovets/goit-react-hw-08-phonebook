import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth/authSelector';
import { userLogOut } from 'redux/auth/authOperations';
import currentUser from '../../image/1673118323026images (9).jpg';

import css from './UserMenu.module.css';
import { logOutContacts } from 'redux/contacts/contactsSlice';
const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    await dispatch(userLogOut()).unwrap();
    dispatch(logOutContacts());
  };
  return (
    <div className={css.right_header}>
      {isLoggedIn && (
        <>
          <img className={css.userFoto} src={currentUser} alt="currentUser" />{' '}
          <p className={css.userName}>{name}</p>
        </>
      )}

      {!isLoggedIn ? (
        <div className={css.right_header_link}>
          <Link to="/register">Registration</Link>
          <Link to="/login">Login</Link>
        </div>
      ) : (
        <span className={css.logOut} onClick={handleLogOut}>
          LogOut
        </span>
      )}
    </div>
  );
};

export default UserMenu;
