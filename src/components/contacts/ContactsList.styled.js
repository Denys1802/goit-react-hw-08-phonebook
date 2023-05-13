import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 30px;
  font-weight: 500;
  font-size: 18px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactsBtn = styled.button`
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  //width: 100%;
  border: 0;
  padding: 10px 4px;
  border-radius: 5px;
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

export const TitleList = styled.h2`
  color: rgb(86, 101, 115);
  font-size: 18px;
`;

// .list {
//   margin-top: 30px;
//   color: var(--secondaryTextColor);
//   font-weight: 500;
//   font-size: 18px;
// }

// .item {
//   display: flex;
//   justify-content: space-between;
// }

// .item:not(:last-child) {
//   margin-bottom: 10px;
// }

// .btn {
//   width: 30px;
//   height: auto;
//   cursor: pointer;
//   display: inline-block;
//   background-image: url(../../img/delete.svg);
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-color: transparent;
//   border: none;
//   outline: none;
//   transition: transform 250ms var(--timingFn);
// }

// .btn:hover {
//   transform: scale(1.1);
// }
