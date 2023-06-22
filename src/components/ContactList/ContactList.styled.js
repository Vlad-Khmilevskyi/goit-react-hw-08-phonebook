import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* width: 100%; */
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  padding: 5px;
  margin-left: 30px;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  display: block;
  margin-right: 10px;
  background-color: #f2f2f2;
  font-size: 16px;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;

  &:hover,
  &:focus {
    background-color: #5a5df1;
  }

  &:active {
    scale: 0.95;
  }
`;