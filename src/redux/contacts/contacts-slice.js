// import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { contactsActions } from 'redux/contacts';
import { contactsOperations } from 'redux/contacts';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from './contacts-operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsActions.changeFilter](state, { payload }) {
      state.filter = payload;
    },
    // fetchContacts
    [contactsOperations.fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.fetchContacts.fulfilled](state, { payload }) {
      state.contacts = payload;
      state.isLoading = false;
    },
    [contactsOperations.fetchContacts.rejected](state) {
      state.isLoading = false;
    },
    // addContacts
    [contactsOperations.addContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.addContact.fulfilled](state, { payload }) {
      state.contacts = [...state.contacts, payload];
      state.isLoading = false;
    },
    [contactsOperations.addContact.rejected](state) {
      state.isLoading = false;
    },
    // deleteContacts
    [contactsOperations.deleteContact.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, { payload }) {
      state.contacts = [
        ...state.contacts.filter(({ id }) => id.toString() !== payload),
      ];
      state.isLoading = false;
    },
    [contactsOperations.deleteContact.rejected](state) {
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;

// const contacts = createReducer([], {
//   [addContact.fulfilled]: (state, action) => [...state, action.payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id.toString() !== payload),
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
// });

// const filter = createReducer('', {
//   [contactsActions.changeFilter]: (_, { payload }) => payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// });

// const contactsReducer = combineReducers({
//   contacts: contacts,
//   filter,
//   isLoading,
//   error,
// });

// export default contactsReducer;
