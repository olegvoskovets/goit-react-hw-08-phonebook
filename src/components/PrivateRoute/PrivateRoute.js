import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefresher } from 'redux/auth/authSelector';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefresched = useSelector(selectIsRefresher);
  const shoutRedirect = !isLoggedIn && !isRefresched;

  return shoutRedirect ? <Navigate to={redirectTo} /> : Component;
};
export default PrivateRoute;
