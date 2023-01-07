import axios from 'axios';
import { carrotApi } from './apiUrl';
const _carrotaxios = axios.create({
  baseURL: carrotApi,
  timeout: 5000,
});

export { _carrotaxios };
