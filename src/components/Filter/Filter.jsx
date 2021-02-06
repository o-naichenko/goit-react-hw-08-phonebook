import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions, contactsSelectors } from 'redux/contacts';
// import contactsActions from 'redux/contacts';
import s from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        placeholder="Type name here"
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      ></input>
    </label>
  );
};

export default Filter;
