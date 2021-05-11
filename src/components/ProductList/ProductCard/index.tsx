import { VFC } from 'react';
import useFetchCartRedux from '../../../hooks/useFetchCartRedux';
import { Product } from '../../../types';
import {
  CartIconButton,
  ContentContainer,
  ProductNameText,
  ProductText,
  StyledProductCard,
} from './style';

const ProductCard: VFC<Product> = (product) => {
  const { name, price, image } = product;
  const { addItem } = useFetchCartRedux();

  const onClickAddCart = () => {
    if (!window.confirm('장바구니에 추가하시겠습니까?')) return;

    addItem(product);
  };

  return (
    <StyledProductCard type="vertical" image={image}>
      <ContentContainer>
        <div>
          <ProductNameText data-testid="product-name">{name}</ProductNameText>
          <ProductText>{price} 원</ProductText>
        </div>
        <CartIconButton onClick={onClickAddCart} data-testid="add-cart-button" />
      </ContentContainer>
    </StyledProductCard>
  );
};

export default ProductCard;
