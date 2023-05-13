import styled from 'styled-components';

export const FormPage = styled.div`
  width: 420px;
  padding: 8% 0 0;
  margin: auto;
`;

export const FormLogin = styled.form`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 420px;
  margin: 0 auto 135px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
`;

export const InputLogin = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const LoginButton = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  font-weight: 700;
  color: #ffffff;
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
