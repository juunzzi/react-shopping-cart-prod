import styled from "styled-components";
import { ColumnFlexWrapper } from "../../styles/Wrapper";
import AllSelectButton from "../AllSelectButton/AllSelectButton";
import ProductDeleteButton from "../ProductDeleteButton/ProductDeleteButton";
import ShoppingCartItemsContainer from "../ShoppingCartItemsContainer/ShoppingCartItemsContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartsLoading,
  selectCurrentCarts,
} from "../../redux/carts/carts.selector";
import { CURRENT_USER } from "../../constants";
import WithSpinner from "../@shared/WithSpinner/WithSpinner";
import {
  deleteCheckedProductsStart,
  fetchCartsStart,
} from "../../redux/carts/carts.action";
import { useEffect } from "react";

const CartLeftSectionHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const CartItemsContainerHeader = styled.div`
  font-size: 13px;
  width: 100%;
  padding: 20px 0;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors["gray_01"]};
`;

function CartLeftSection() {
  const carts = useSelector(selectCurrentCarts);
  const dispatch = useDispatch();
  const myCarts = carts.filter((cart) => cart.user === CURRENT_USER);
  const cartLoading = useSelector(selectCartsLoading);
  const checkedIdList = myCarts
    .filter((cart) => cart["checked"])
    .map((cart) => cart.id);

  const handleDeleteCheckedProducts = () => {
    dispatch(deleteCheckedProductsStart(checkedIdList));
  };

  useEffect(() => {
    dispatch(fetchCartsStart());
  }, [dispatch]);

  return (
    <ColumnFlexWrapper width="490px">
      <CartLeftSectionHeader>
        <AllSelectButton />
        <ProductDeleteButton onClick={handleDeleteCheckedProducts}>
          상품삭제
        </ProductDeleteButton>
      </CartLeftSectionHeader>
      <div style={{ width: "inherit" }}>
        <CartItemsContainerHeader>{`든든배송상품 ${myCarts.length}개`}</CartItemsContainerHeader>
        <WithSpinner loading={cartLoading}>
          <ShoppingCartItemsContainer carts={myCarts} />
        </WithSpinner>
      </div>
    </ColumnFlexWrapper>
  );
}

export default CartLeftSection;
