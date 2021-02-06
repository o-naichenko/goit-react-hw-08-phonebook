import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import s from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <p className={s.text}>{contact.name + ': ' + contact.number}</p>
      <button
        className={s.deleteBtn}
        type="button"
        id={contact.id}
        onClick={e => dispatch(contactsOperations.deleteContact(e.target.id))}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default Contact;
