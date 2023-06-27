import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 2px 4px;
  border-radius: 10px;
  padding: 20px;
  background-color: #e2e5e7;

  label {
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin: 0px 0px 20px;
  }

  p {
    text-align: center;
    font-size: 16px;
    color: grey;
  }
`;

