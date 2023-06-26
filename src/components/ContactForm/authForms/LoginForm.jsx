import { useDispatch, useSelector } from 'react-redux';
import { Form } from './authForm.styles';
import { logIn } from 'redux/auth/operations';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import Input, { inputClasses } from '@mui/base/Input';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  const StyledInput = styled(Input)(
  ({ theme }) => `

  .${inputClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[300]};
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }`,);

  return (
    <>
      <h1>Your personal phone book</h1>
      {errorLogin && <div>Error login</div>}
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <label>
        <StyledInput
          type="email"
          name="email"
          required
          placeholder="Email"
        />
        <StyledInput
          type="password"
          name="password"          
          required
          placeholder="Password"    
        />
        </label>
        <Button variant="contained" color="success" type="submit">Log In</Button>
      </Form>
    </>
  );
};

const blue = {
  100: '#DAECFF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  300: '#CDD2D7',
  400: '#B2BAC2',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};
