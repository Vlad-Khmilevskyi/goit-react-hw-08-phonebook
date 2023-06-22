import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  margin: 30px 0;
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 20px;
`;

export const Text = styled.label`
  font-size: 20px;
  margin-right: 10px;
`;

export const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 30px;

  &:hover {
    outline: transparent;
  }
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