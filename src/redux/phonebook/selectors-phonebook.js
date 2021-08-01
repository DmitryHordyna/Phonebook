import { createSelector } from 'reselect';

export const getLoading = state => state.phonebook.loading;

export const getFilter = state => state.phonebook.filter;

export const getAllContacts = state => state.phonebook.items;

export const getTotalContactsCount = state => {
  const contacts = getAllContacts(state);

  return contacts.length;
};

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter),
    );
  },
);

export default {
  getVisibleContacts,
  getFilter,
  getAllContacts,
  getLoading,
  getTotalContactsCount,
};
