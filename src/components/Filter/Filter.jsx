import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Paper } from '@material-ui/core';
import { contactsActions, contactsSelectors } from 'redux/contacts';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <Paper elevation={3} className={s.paper}>
      <TextField
        fullWidth={true}
        variant="outlined"
        size="small"
        margin="dense"
        label="Пошук за іменем"
        type="text"
        name="filter"
        value={value}
        onChange={e =>
          dispatch(contactsActions.changeFilter(e.currentTarget.value))
        }
      ></TextField>
    </Paper>
  );
};

export default Filter;
