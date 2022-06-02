import Button from '@/components/common/Button/Button';
import CheckBox from '@/components/common/CheckBox/CheckBox';
import Counter from '@/components/common/Counter/Counter';
import Icon from '@/components/common/Icon/Icon';
import Image from '@/components/common/Image/Image';
import Loading from '@/components/common/Loading/Loading';
import useResponsive from '@/hooks/useResponsive';
import theme from '@/styles/Theme';
import { useNavigate } from 'react-router-dom';
import * as Styled from './CartItem.style';
function CartItem({
  cart,
  isLoading,
  isChecked,
  onClickDecreaseButton,
  onClickIncreaseButton,
  onClickDeleteButton,
  onClickCheckBox,
}) {
  const { id, imageURL, name, price, quantity } = cart;

  const navigate = useNavigate();

  const responsive = useResponsive();

  const navigateToProduct = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Styled.Container>
      <CheckBox isChecked={isChecked} onClick={onClickCheckBox} />

      <Styled.ImageWrapper onClick={navigateToProduct}>
        <Image
          src={imageURL}
          alt=""
          width={responsive === 'desktop' ? '200px' : '150px'}
          height={responsive === 'desktop' ? '200px' : '150px'}
        />
      </Styled.ImageWrapper>

      <Styled.NameWrapper onClick={navigateToProduct}>{name}</Styled.NameWrapper>

      <Styled.PriceWrapper>
        <Button backgroundColor={theme.whiteColor_1} onClick={onClickDeleteButton}>
          <Icon iconName="recycleBin" color={theme.greyColor_1} hoverColor={theme.redColor_1} />
        </Button>

        <Styled.CounterWrapper>
          {isLoading ? (
            <Loading type="ui">👻</Loading>
          ) : (
            <Counter
              count={quantity}
              increaseCount={onClickIncreaseButton}
              decreaseCount={onClickDecreaseButton}
            />
          )}
        </Styled.CounterWrapper>

        <Styled.Text>{price}원</Styled.Text>
      </Styled.PriceWrapper>
    </Styled.Container>
  );
}

export default CartItem;
