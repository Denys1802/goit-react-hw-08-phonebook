import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  height: 150px;
  margin: 100px auto 0 auto;
  background-color: #4caf50;
  border-radius: 8px;
`;

export const HomeTitle = styled.h1`
  color: #ffff;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
`;

export const HomePageLink = styled(Link)`
  text-decoration: underline;
  color: #fff;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;
