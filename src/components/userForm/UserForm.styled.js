import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 20px;
  color: #566573;
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Button = styled.button`
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
