import React from "react";
import styles from "../styles/components/ListEmpty.module.css";
import redirectToLoginPage from '../utils/redirectToLoginPage';
import { useDispatch} from 'react-redux';

const ListEmpty = ({ show, isLogin }) => {
const  reduxDispatch = useDispatch();
const goToLoginPageHandler = () => redirectToLoginPage(reduxDispatch)

  return show ? (
    <div className={styles.wrapper}>
      <div>List is empty</div>
      {!isLogin && <div
      className={styles.link}
        onClick={goToLoginPageHandler}
      >Please Login</div>}
    </div>
  ) : null;

}

export default ListEmpty;
