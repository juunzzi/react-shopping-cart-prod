import { client } from 'apis';
import { AxiosError } from 'axios';
import type { Dispatch } from 'redux';

import { ItemListAction, itemListActions } from './action';

export const getItemList = () => async (dispatch: Dispatch<ItemListAction>) => {
  dispatch(itemListActions.getItemListActionGroup.request());
  try {
    const response = await client.get('/products');

    dispatch(itemListActions.getItemListActionGroup.success(response.data));
  } catch (e: unknown) {
    if (e instanceof AxiosError) {
      dispatch(itemListActions.getItemListActionGroup.failure(e));
    }
  }
};