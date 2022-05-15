import React from "react";
import styled from "styled-components";
import shoppingCartIconWhite from "../../asset/shopping-cart-icon-white.svg";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 380px;
  color: ${({ theme }) => theme.main};
  cursor: pointer;
`;

const IconImg = styled.img`
  width: 50px;
  height: 44px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
`;

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <IconImg src={shoppingCartIconWhite} alt="장바구니 아이콘" />
        <Title>TAEPHIA SHOP</Title>
      </LogoContainer>
    </Link>
  );
}

export default Logo;
