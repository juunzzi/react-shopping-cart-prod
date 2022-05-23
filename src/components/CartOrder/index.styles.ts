import styled from "@emotion/styled";

export const CartOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  border: 1px solid #ddd;
`;

export const CartOrderTitle = styled.span`
  width: 100%;
  text-align: left;
  padding: 1em;
  font-size: 1.5rem;
  border-bottom: 3px solid #ddd;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1em;
  margin-bottom: 2em;
`;

export const OrderButton = styled.button<{ buttonColor: string }>`
  text-align: center;
  width: 90%;
  padding: 0.7em;
  color: white;
  background-color: ${(props) => props.buttonColor};
  font-size: 1.2rem;
  border: none;
  margin-bottom: 1em;
`;

export const Price = styled.p<{
  linearColorFrom: string;
  linearColorTo: string;
}>`
  font-weight: bold;
  display: inline-block;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.linearColorFrom} 70%, ${props.linearColorTo} 30%)`};
`;
