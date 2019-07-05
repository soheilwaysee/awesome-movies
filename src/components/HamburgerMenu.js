import React from "react";
import styles from "./HamburgerMenu.module.css";

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

export default HamburgerMenu;
