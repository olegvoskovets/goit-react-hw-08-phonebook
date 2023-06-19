import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefresher } from 'redux/auth/authSelector';
import { Loader } from 'components/Loader/Loader';
import About from 'pages/About/About';
import { fetchContacts } from 'redux/contacts/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isRefresher = useSelector(selectIsRefresher);
  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefresher ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={<PrivateRoute redirectTo="/login" component={<Home />} />}
        />
        <Route
          path="about"
          element={<PrivateRoute redirectTo="/login" component={<About />} />}
        />

        <Route
          path="register"
          element={<PublicRoute redirectTo="/" component={<RegisterPage />} />}
        />
        <Route
          path="login"
          element={<PublicRoute redirectTo="/" component={<LoginPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
