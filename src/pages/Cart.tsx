import CartList from 'components/Cart/CartList';
import LayoutWithTitle from 'components/common/LayoutWithTitle';
import Loading from 'components/common/Loading';
import PaymentBox from 'components/common/PaymentBox';
import useThunkFetch from 'hooks/useThunkFetch';
import { getCartListRequest } from 'redux/cartList/thunk';
import styled from 'styled-components';

const Cart = () => {
  const { data: cartList, loading: loading_cartList } = useThunkFetch(
    state => state.cartList,
    getCartListRequest(),
    { useErrorBoundary: true }
  );

  const selectedCarts = cartList.filter(cart => cart.isChecked);
  const totalPrice = selectedCarts.reduce((acc, item) => item.price * item.quantity + acc, 0);

  if (loading_cartList === 'getCartList') return <Loading />;

  return (
    <LayoutWithTitle title='장바구니'>
      <StyledMain>
        <CartList cartList={cartList} />
        <PaymentBox
          title='결제예상금액'
          priceDescription='결제예상금액'
          price={totalPrice}
          buttonText={`주문하기 (${selectedCarts.length}개)`}
          style={{ position: 'sticky', top: '50%' }}
        />
      </StyledMain>
    </LayoutWithTitle>
  );
};

export default Cart;

const StyledMain = styled.main`
  display: flex;
  gap: 15.7rem;
  height: 100%;
`;