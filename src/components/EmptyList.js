import React from "react";
import styles from "../styles/components/EmptyList.module.css";
import redirectToLoginPage from '../utils/redirectToLoginPage';
import { useDispatch} from 'react-redux';
import PropTypes from 'prop-types'

const EmptyList = ({ show, isLoggedIn }) => {
const  reduxDispatch = useDispatch();
const goToLoginPageHandler = () => redirectToLoginPage(reduxDispatch)

  return show ? (
    <div className={styles.wrapper}>
      <div>List is empty</div>
      {!isLoggedIn && <div
      className={styles.link}
        onClick={goToLoginPageHandler}
      >Please Login</div>}
    </div>
  ) : null;

};

EmptyList.propTypes = {
  show: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
};

export default EmptyList;
