import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (filter.length === 0) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
  },
);
