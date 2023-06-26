import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from '../redux/contacts/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContForm } from 'components/ContactList/ContactList.styled';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContForm>
      <h1>Your phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </ContForm>
  );
};

export default Contacts;
