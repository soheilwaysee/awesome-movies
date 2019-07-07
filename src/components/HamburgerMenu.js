import React from "react";
import styles from "../styles/components/HamburgerMenu.module.css";
import PropTypes from 'prop-types'

const HamburgerMenu = ({ setShowSideBar }) => (
  <button
    data-testid="button"
    type="button"
    onClick={() => setShowSideBar(show => !show)}
    className={styles.wrapper}
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </button>
);

HamburgerMenu.propTypes = {
  setShowSideBar: PropTypes.func
};

export default HamburgerMenu;
