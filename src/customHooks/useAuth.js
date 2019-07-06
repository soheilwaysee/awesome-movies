import {useSelector} from 'react-redux'
import isLoginCheck from '../utils/isLoginCheck';

const useAuth = () => useSelector(state => ({
    isLogin: isLoginCheck(state)
  }));

export default useAuth;