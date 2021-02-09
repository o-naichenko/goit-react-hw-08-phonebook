import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Button, ListItem, Typography, Paper } from '@material-ui/core';
import { contactsOperations } from 'redux/contacts';
import s from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <ListItem selected={true} className={s.item}>
      <Paper elevation={3} className={s.paper}>
        <Typography noWrap={true} className={s.text}>
          {contact.name + ': ' + contact.number}
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          type="button"
          id={contact.id}
          onClick={e =>
            dispatch(contactsOperations.deleteContact(e.currentTarget.id))
          }
        >
          Видалити
        </Button>
      </Paper>
    </ListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

export default Contact;
