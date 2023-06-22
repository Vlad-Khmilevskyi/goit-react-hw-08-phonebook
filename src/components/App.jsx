import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { MainHeader, SecondaryHeader, Section } from './App.styled';

import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/filterSlice';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <MainHeader>Phonebook</MainHeader>

      <ContactForm />
      <SecondaryHeader>Contacts</SecondaryHeader>

      <Filter />
      <ContactList />
      <ToastContainer position="top-center" />
    </Section>
  );
};
