import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 15px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: #ffff;
`;

export const UserButton = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: #ffff;
  border: 0;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
  color: #4caf50;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.5 ease;
  cursor: pointer;
  &:focus,
  &:active,
  &:hover {
    background: #43a047;
  }
`;
