import { BASE_URL_LIST, members } from 'apis';
import { ReactComponent as CartIcon } from 'assets/cartIcon.svg';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from 'redux/user/action';
import { PATH } from 'Routers';
import styled from 'styled-components';
import { flexCenter } from 'styles/mixin';

import Avatar from './Avatar';
import Dropdown from './Dropdown';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLogin = useAppSelector(state => !!state.user.data);
  const name = useAppSelector(state => state.user.data?.name);
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowAPIDropdown, setIsShowAPIDropdown] = useState(false);

  const closeDropdown = () => {
    setIsShowDropdown(false);
  };

  const openDropdown = () => {
    setIsShowDropdown(true);
  };

  const handleClickLogout = () => {
    navigate(PATH.home);
    dispatch(logout());
    localStorage.removeItem('access-token');
  };

  const handleClickMember = (member: string) => {
    dispatch(logout());
    localStorage.removeItem('access-token');
    localStorage.setItem('baseUrl', JSON.stringify(BASE_URL_LIST[member]));
    window.location.reload();
  };

  return (
    <StyledRoot>
      <Link to={PATH.getMain(1)}>
        <div>
          <CartIcon fill='white' />
          <StyledBrandName>Woowa Shop</StyledBrandName>
        </div>
      </Link>
      <StyledNav>
        <StyledDropdownWrapper>
          <button onClick={() => setIsShowAPIDropdown(true)}>API 교체하기</button>
          {isShowAPIDropdown && (
            <Dropdown closeDropdown={() => setIsShowAPIDropdown(false)}>
              {members.map(member => (
                <li key={member} onClick={() => handleClickMember(member)}>
                  {member}
                </li>
              ))}
            </Dropdown>
          )}
        </StyledDropdownWrapper>
        {isLogin ? (
          <>
            <button onClick={() => navigate(PATH.cart)}>장바구니</button>
            <StyledDropdownWrapper>
              <Avatar name={name} onClick={openDropdown} />
              {isShowDropdown && (
                <Dropdown closeDropdown={closeDropdown}>
                  <li onClick={() => navigate('/edit')}>회원정보수정</li>
                  <li
                    onClick={() => {
                      handleClickLogout();
                      closeDropdown();
                    }}
                  >
                    로그아웃
                  </li>
                  <li onClick={() => navigate(PATH.withdrawal)}>회원탈퇴</li>
                </Dropdown>
              )}
            </StyledDropdownWrapper>
          </>
        ) : (
          <button onClick={() => navigate(PATH.login)}>로그인</button>
        )}
      </StyledNav>
    </StyledRoot>
  );
};

export default Header;

const StyledRoot = styled.header`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;
const StyledBrandName = styled.span`
  color: white;
  font-size: 4rem;
  font-weight: 900;
  margin-left: 1rem;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 4.4rem;
  & button {
    color: white;
    font-size: 2.4rem;
    background-color: inherit;
  }
`;

const StyledDropdownWrapper = styled.div`
  position: relative;
  ${flexCenter};
`;