import { useSelector } from 'react-redux';
import isLoggedInCheck from '../utils/isLoggedInCheck';

const useAuth = () =>
  useSelector(state => ({
    isLoggedIn: isLoggedInCheck(state)
  }));

export default useAuth;
