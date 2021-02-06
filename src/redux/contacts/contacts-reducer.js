import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { contactsActions } from 'redux/contacts';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';

const contacts = createReducer([], {
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id.toString() !== payload),
  [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const filter = createReducer('', {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
});

const contactsReducer = combineReducers({
  contacts: contacts,
  filter,
  isLoading,
  error,
});

export default contactsReducer;
