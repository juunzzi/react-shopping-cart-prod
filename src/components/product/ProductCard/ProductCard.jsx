import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useModal } from 'hooks/useModal';

import { Image, Icon, Modal } from 'components/common';

import { CartAddForm } from 'components/product';

import * as S from 'components/product/ProductCard/ProductCard.style';
import { color } from 'styles/Theme';
import * as GlobalStyled from 'styles/GlobalStyles';

function ProductCard({ product }) {
  const { id, imageURL, name, price } = product;

  const { isModalOpen, openModal, closeModal } = useModal();
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(`/products/${id}`);
  };

  const onClickCartButton = () => {
    openModal();
  };

  return (
    <GlobalStyled.Position>
      <S.Container onClick={onClickCard}>
        <Image src={imageURL} alt={name} />
        <S.Content>
          <S.Description>
            <S.Name>{name}</S.Name>
            <S.Price>{price}원</S.Price>
          </S.Description>
        </S.Content>
      </S.Container>

      <GlobalStyled.Position position="absolute" bottom="5px" right="5px">
        <S.TransparentButton type="button" onClick={onClickCartButton}>
          <Icon iconName="Cart" fill={color.DARK_GRAY} />
        </S.TransparentButton>
      </GlobalStyled.Position>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CartAddForm product={product} closeModal={closeModal} />
        </Modal>
      )}
    </GlobalStyled.Position>
  );
}

ProductCard.skeleton = () => {
  return (
    <S.Container skeleton={true}>
      <S.Placeholder shape="square" />
      <S.Content>
        <S.Placeholder shape="line" />
      </S.Content>
    </S.Container>
  );
};

export default ProductCard;
