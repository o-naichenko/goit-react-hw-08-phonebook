import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Paper, TextField } from '@material-ui/core';
import PhoneInput from 'react-phone-number-input';
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
      alert(`Контакт з іменем: ${newContact.name} вже існує`);
      return false;
    } else if (contacts.find(contact => contact.number === newContact.number)) {
      setNumber('');
      alert(`Контакт з номером: ${newContact.number} вже існує`);
      return false;
    } else {
      return true;
    }
  }
  function checkInputsFill(name, number) {
    if (name.value.length === 0) {
      alert('Будь ласка, введіть ім`я');
      return false;
    } else if (number.value.length === 0) {
      alert('Будь ласка, введіть номер');
      return false;
    } else {
      return true;
    }
  }

  const onChangeHandler = e => {
    const { name, value } = e.target;
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
    const { name, number } = e.target;
    const newContact = {
      name: name.value,
      number: number.value,
    };
    if (!checkInputsFill(name, number)) {
      return;
    } else if (checkContactUnique(newContact) === true) {
      dispatch(contactsOperations.addContact(newContact));
      clearState();
    }
  };
  return (
    <Box>
      <Paper elevation={3} className={s.paper}>
        <b>Додати новий контакт:</b>
        <form className={s.form} onSubmit={onSubmitHandler}>
          <TextField
            className={s.input}
            variant="outlined"
            size="small"
            type="text"
            label="Ім'я"
            name="name"
            value={name}
            onChange={onChangeHandler}
          ></TextField>
          <TextField
            className={s.input}
            variant="outlined"
            size="small"
            type="tel"
            label="Номер телефону"
            name="number"
            value={number}
            onChange={onChangeHandler}
          >
            <PhoneInput />
          </TextField>
          <Button variant="contained" size="small" type="submit">
            Зберегти
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
