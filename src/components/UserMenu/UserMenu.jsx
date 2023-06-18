import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth/authSelector';
import { userLogOut } from 'redux/auth/authOperations';
import currentUser from '../../image/1673118323026images (9).jpg';
import guestFoto from '../../image/no_avatar_57.jpg';
import css from './UserMenu.module.css';
const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogOut());
  };
  return (
    <div className={css.right_header}>
      {isLoggedIn ? (
        <>
          <img className={css.userFoto} src={currentUser} alt="currentUser" />{' '}
          <p className={css.userName}>{name}</p>
        </>
      ) : (
        <>
          <img className={css.userFoto} src={guestFoto} alt="currentUser" />
          <p className={css.userName}>Гість</p>
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
