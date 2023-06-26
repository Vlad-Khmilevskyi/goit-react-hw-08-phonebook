import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import {NavAuthBox, Nav, NavOut} from './Navigation.styled';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';

export default function Navigation() {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          {isLoggedIn ? (
            <NavAuthBox>
              <Nav to="/contacts"><Button variant="contained" color="inherit">Contacts</Button></Nav>
              <NavOut><Button type="button" onClick={() => dispatch(logOut())} variant="contained" color="inherit">Log out</Button></NavOut>
            </NavAuthBox>
          )
            : (
              <NavAuthBox>
                {!isLoggedIn && <Nav to="/register"><Button  variant="contained" color="inherit">Sing Up</Button></Nav>}
                {!isLoggedIn && <Nav to="/login"><Button  variant="contained" color="inherit">Log In</Button></Nav>}
              </NavAuthBox>
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
