import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@material-ui/core';

import Contact from 'components/Contact';
import { contactsSelectors } from 'redux/contacts';
// import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  return (
    <List>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
