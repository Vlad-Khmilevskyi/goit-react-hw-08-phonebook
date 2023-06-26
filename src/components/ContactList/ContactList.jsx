import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ListItem, List } from './ContactList.styled';
import {
  selectContacts,
  selectContactsFilter,
} from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <List>
      {visibilityContacts.map(contact => (
        <ListItem key={contact.id}>          
          <div><span style={{  }}>{contact.name}</span>: <span style={{ marginLeft: '10px' }}>{contact.number}</span></div>

          <Button variant="contained" color="error" type="button" id={contact.id} onClick={handleDelete}>
            Remove
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
