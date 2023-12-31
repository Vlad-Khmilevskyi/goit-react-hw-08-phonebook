import { Label} from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from '../../redux/contacts/filterSlice';

import * as React from 'react';
import { styled } from '@mui/system';
import Input, { inputClasses } from '@mui/base/Input';

export const Filter = () => {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
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
    <Label>
      <StyledInput type="text" name="filter" placeholder="Find contacts by name" onChange={handlerFilter} />
    </Label>
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
