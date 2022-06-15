import { ActionGroupType, ActionsType } from 'redux/types';
import { buildThunkActionGroup } from 'redux/utils';
import { CartItem } from 'types/domain';

export const CartListActionType = {
  GET_CART_LIST: 'cart/GET_CART_LIST',
  PUT_CART_ITEM: 'cart/PUT_CART_ITEM',
  POST_CART_ITEM: 'cart/POST_CART_ITEM',
  CHECK_CART_ITEM: 'cart/CHECK_CART_ITEM',
  CHECK_ALL_CART_ITEM: 'cart/CHECK_ALL_CART_ITEM',
  DELETE_CART_ITEM: 'cart/DELETE_CART_ITEM',
  DELETE_ALL_CART_ITEM: 'cart/DELETE_ALL_CART_ITEM',
} as const;

const getCartListActionGroup = buildThunkActionGroup<
  CartItem[],
  typeof CartListActionType.GET_CART_LIST
>(CartListActionType.GET_CART_LIST);

const putCartItemActionGroup = buildThunkActionGroup<
  CartItem,
  typeof CartListActionType.PUT_CART_ITEM
>(CartListActionType.PUT_CART_ITEM);

const postCartItemActionGroup = buildThunkActionGroup<
  CartItem,
  typeof CartListActionType.POST_CART_ITEM
>(CartListActionType.POST_CART_ITEM);

const deleteCartItemActionGroup = buildThunkActionGroup<
  number,
  typeof CartListActionType.DELETE_CART_ITEM
>(CartListActionType.DELETE_CART_ITEM);

const deleteAllCartItemActionGroup = buildThunkActionGroup(CartListActionType.DELETE_ALL_CART_ITEM);

export const checkCartItem = (id: number) => ({
  type: CartListActionType.CHECK_CART_ITEM,
  payload: id,
});

export const checkAllCartItem = (isAllChecked: boolean) => ({
  type: CartListActionType.CHECK_ALL_CART_ITEM,
  payload: isAllChecked,
});

export const cartListActions = {
  getCartListActionGroup,
  putCartItemActionGroup,
  postCartItemActionGroup,
  deleteCartItemActionGroup,
  deleteAllCartItemActionGroup,
};

export type CartListAction =
  | ActionsType<ActionGroupType<typeof cartListActions>>
  | ReturnType<typeof checkCartItem>
  | ReturnType<typeof checkAllCartItem>;