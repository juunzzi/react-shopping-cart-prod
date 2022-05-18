import axios from 'axios';
import PATH from '../constants/path';

const LOAD_CARTS_START = 'carts/LOAD_START';
const LOAD_CARTS_SUCCESS = 'carts/LOAD_SUCCESS';
const LOAD_CARTS_FAIL = 'carts/LOAD_FAIL';
const LOAD_CARTS_DONE = 'carts/LOAD_DONE';
const ADD_PRODUCT_TO_CARTS = 'carts/ADD_PRODUCT';
const DELETE_PRODUCT_FROM_CARTS = 'carts/DELETE_PRODUCT';

const initialState = {
  isLoading: false,
  carts: [],
  error: null,
};

const loadCartsStart = () => ({ type: LOAD_CARTS_START });
const loadCartsSuccess = (carts) => ({
  type: LOAD_CARTS_SUCCESS,
  payload: carts,
});
const loadCartsFail = (error) => ({
  type: LOAD_CARTS_FAIL,
  payload: error,
});
const loadCartsDone = () => ({
  type: LOAD_CARTS_DONE,
});
const addProduct = (id) => ({
  type: ADD_PRODUCT_TO_CARTS,
  payload: { id, quantity: 1 },
});
const deleteProduct = (id) => ({
  type: DELETE_PRODUCT_FROM_CARTS,
  payload: id,
});

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARTS_START:
      return { ...state, isLoading: true };
    case LOAD_CARTS_SUCCESS:
      return { ...state, carts: action.payload };
    case LOAD_CARTS_FAIL:
      return { ...state, error: action.payload };
    case LOAD_CARTS_DONE:
      return { ...state, isLoading: false };
    case ADD_PRODUCT_TO_CARTS:
      return { ...state, carts: state.carts.concat(action.payload) };
    case DELETE_PRODUCT_FROM_CARTS:
      return {
        ...state,
        carts: state.carts.filter(({ id }) => id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export const loadCarts = () => async (dispatch) => {
  dispatch(loadCartsStart());
  try {
    const carts = await axios(
      `${process.env.REACT_APP_SERVER_URL}/${PATH.CARTS}`
    );
    dispatch(loadCartsSuccess(carts.data));
  } catch (error) {
    dispatch(loadCartsFail(error));
  } finally {
    dispatch(loadCartsDone());
  }
};

export const addProductToCarts = (id) => (dispatch) => {
  dispatch(addProduct(id));
};
export const deleteProductFromCarts = (id) => (dispatch) => {
  dispatch(deleteProduct(id));
};

export default cartsReducer;