import axios from 'axios';
import config from '../config';

export const instance = axios.create({
  baseURL: config.BASE_URL
});
export default instance.request;
