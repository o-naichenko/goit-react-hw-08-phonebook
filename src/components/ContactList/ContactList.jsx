import React from 'react';
import { useSelector } from 'react-redux';
import Contact from 'components/Contact';
import { contactsSelectors } from 'redux/contacts';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getFilteredContacts);
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
