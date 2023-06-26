import styled from 'styled-components';

export const Container = styled.div`
`;

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-height: 85vh;

  a {
    color: grey;
    &:hover,
    &:focus {
      color: black;
    }
  }
`;