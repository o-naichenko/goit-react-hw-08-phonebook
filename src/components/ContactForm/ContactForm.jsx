import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  const clearState = () => {
    setName('');
    setNumber('');
  };

  function checkContactUnique(newContact) {
    if (contacts.find(contact => contact.name === newContact.name)) {
      setName('');
      alert(`Contact with name: ${newContact.name} already exists`);
      return false;
    } else if (contacts.find(contact => contact.number === newContact.number)) {
      setNumber('');
      alert(`Contact with number: ${newContact.number} already exists`);
      return false;
    } else {
      return true;
    }
  }
  function checkInputsFill(name, number) {
    if (name.value.length === 0) {
      alert('Please, fill name');
      return false;
    } else if (number.value.length === 0) {
      alert('Please, fill phone number');
      return false;
    } else {
      return true;
    }
  }

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;
    const newContact = {
      name: name.value,
      number: number.value,
    };
    if (checkInputsFill(name, number) === false) {
      return;
    } else if (checkContactUnique(newContact) === true) {
      dispatch(contactsOperations.addContact(newContact));
      clearState();
    }
  };
  return (
    <form className={s.Form} onSubmit={onSubmitHandler}>
      <label className={s.label}>
        <span>Name:</span>
        <input
          className={s.input}
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChangeHandler}
        ></input>
      </label>
      <label className={s.label}>
        <span>Number:</span>
        <input
          className={s.input}
          type="tel"
          placeholder="Phone number"
          name="number"
          value={number}
          onChange={onChangeHandler}
        ></input>
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
