import styled from 'styled-components';

export const ContForm = styled.div`
  text-align: center;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px;
  border-radius: 10px;
  padding: 20px;
  background-color: #e2e5e7;
  margin-top: 50px;

  h1{
    font-size: 28px;
  }
  h2 {
    font-size: 25px;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  FONT-WEIGHT: 500;
  background-color: rgb(255 255 255 / 50%);;
`;