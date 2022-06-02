import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colorConfig.primary};
  padding: 10px;

  min-width: ${({ theme }) => theme.minWidth};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.innerWidth};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colorConfig.textWhite};
  display: flex;
  align-items: center;

  ${({ theme }) => theme.tablet} {
    font-size: 1rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
  ${({ theme }) => theme.tablet} {
    gap: 10px;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colorConfig.textWhite};
  font-weight: bold;
  font-size: 16px;

  ${({ theme }) => theme.tablet} {
    font-size: 0.8rem;
  }
`;

export const NavButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colorConfig.textWhite};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;

  ${({ theme }) => theme.tablet} {
    font-size: 0.8rem;
  }
`;
