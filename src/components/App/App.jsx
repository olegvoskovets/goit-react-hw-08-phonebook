import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home/Home';
import LoginPage from 'pages/LoginPage/LoginPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import RestrictedPoute from 'components/RestrictedPoute/RestrictedPoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';
import { selectIsRefresher } from 'redux/auth/authSelector';
import { Loader } from 'components/Loader/Loader';
import About from 'pages/About/About';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefresher = useSelector(selectIsRefresher);

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
          element={
            <RestrictedPoute redirectTo="/" component={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={<RestrictedPoute redirectTo="/" component={<LoginPage />} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
