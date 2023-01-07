import axios from 'axios';
import { mainAPi } from './apiUrl';
const _axios = axios.create({
  baseURL: mainAPi,
  timeout: 5000,
});

export { _axios };
