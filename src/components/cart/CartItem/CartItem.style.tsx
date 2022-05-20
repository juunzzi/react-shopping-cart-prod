import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;

  display: flex;

  padding: 10px 0;
  gap: 20px;

  border-bottom: 1px solid ${({ theme }) => theme.greyColor_1};
`;
export const ImageWrapper = styled.div`
  width: 150px;

  cursor: pointer;

  ${({ theme }) => theme.tablet} {
    width: 100px;
  }
`;

export const NameWrapper = styled.div`
  min-width: 50px;
  font-size: 1.1rem;

  cursor: pointer;

  flex: 1;

  ${({ theme }) => theme.tablet} {
    font-size: 1rem;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 30px;
`;

export const Text = styled.span``;