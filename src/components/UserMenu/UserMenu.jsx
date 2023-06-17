import { Link } from 'react-router-dom';
import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser, selectIsLoggedIn } from 'redux/auth/authSelector';
import { userLogOut } from 'redux/auth/authOperations';

const UserMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogOut());
  };
  return (
    <div className={css.right_header}>
      {isLoggedIn ? <p>{`Користувач: ${name}`}</p> : <p>Гість</p>}

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
