import React from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import styles from "../styles/components/Header.module.css";
import PropTypes from 'prop-types';

const Header = ({ setShowSideBar }) => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.listWrapper}>
          <li className={[styles.itemWrapper, styles.hamburgerMenu].join(" ")}>
            <HamburgerMenu setShowSideBar={setShowSideBar} />
          </li>
          <li className={styles.itemWrapper}>
            <Link to="/">
              <img src="/logo.png" alt="logo" className={styles.logo} />
            </Link>
          </li>
          <Search />
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  setShowSideBar: PropTypes.func
};

export default Header;
