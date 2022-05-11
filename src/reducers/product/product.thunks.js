import actions from 'reducers/product/product.actions';
import apiClient from 'utils/apiClient';

export const getProductAsync = (id) => async (dispatch) => {
  dispatch(actions.getProduct());

  try {
    const { data } = await apiClient().get(`products/${id}`);
    dispatch(actions.getProductSuccess(data));
  } catch (error) {
    dispatch(actions.getProductError());
  }
};
