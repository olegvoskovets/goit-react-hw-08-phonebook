import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import image from '../../image/telefon_spr.png';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.header_left}>
          <img src={image} alt="tel" width={'40px'} />
          <nav>
            <ul className={css.nav_list}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <UserMenu />
      </header>
      <main className={css.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
