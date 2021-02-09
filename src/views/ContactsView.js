import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@material-ui/core';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

import s from './ContactsView.module.css';

export default function ContactsView() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Box className={s.container}>
      <Box className={s.box}>
        <ContactForm />
      </Box>
      <Box className={s.box}>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </Box>
    </Box>
  );
}
