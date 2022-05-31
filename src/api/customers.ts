import { API_URL } from '@/api/constants';
import axios from 'axios';

const customersAPI = axios.create({
  baseURL: `${API_URL}/customers/`,
});

export const signUp = async userInformation => {
  await customersAPI.post('/signup', userInformation);
};
