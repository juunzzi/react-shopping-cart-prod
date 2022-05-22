import { API_URL } from '@/api/constants';
import axios from 'axios';

const cartAPI = axios.create({
  baseURL: `${API_URL}/carts`,
});

export const addCart = async (product): Promise<any> => {
  const response = await cartAPI.post('/', product);

  if (response.statusText !== 'Created') {
    throw Error('서버 오류!');
  }
};

export const getCart = async (): Promise<any> => {
  const response = await cartAPI.get('/');

  if (response.statusText !== 'OK') {
    throw Error('서버 오류!');
  }

  return { data: response.data };
};

export const deleteCart = async (id): Promise<any> => {
  const response = await cartAPI.delete(`/${id}`);
  if (response.statusText !== 'OK') {
    throw Error('서버 오류!');
  }
};

export const patchCart = async (id, newCartProduct): Promise<any> => {
  const response = await cartAPI.patch(`/${id}`, newCartProduct);
  if (response.statusText !== 'OK') {
    throw Error('서버 오류!');
  }
};
