import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavAuthBox = styled.div`
  display: flex;
  gap: 25px;
`;

export const Nav = styled(NavLink)`
  text-decoration: none;
  color: gray;
  font-size: 25px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &.active {
    color: rgb(57, 23, 23);
  }
`;

export const NavOut = styled.div`
  text-decoration: none;
  color: gray;
  font-size: 25px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &.active {
    color: rgb(57, 23, 23);
  }
`;