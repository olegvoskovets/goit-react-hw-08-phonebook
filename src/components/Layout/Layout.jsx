import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.nav_list}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
          </ul>
        </nav>
        <UserMenu />
      </header>
      <main className={css.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
