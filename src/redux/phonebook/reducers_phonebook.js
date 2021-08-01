//module
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//component
import {
  featchContactsRequest,
  featchContactsSuccess,
  featchContactsError,
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccess,
  deleteContactsError,
  filterContact,
} from './action_phonebook';

const items = createReducer([], {
  [featchContactsSuccess]: (_, { payload }) => payload,
  [addContactsSuccess]: (state, { payload }) => foundMatch(state, payload),
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

function foundMatch(allContacts, newContact) {
  const chek = allContacts.some(
    ({ name, number }) =>
      name === newContact.name || number === newContact.number,
  );
  if (chek) {
    alert(`You have this number or name!!!Sorry try again.`);
    return allContacts;
  } else {
    return [newContact, ...allContacts];
  }
}

const loading = createReducer(false, {
  [featchContactsRequest]: () => true,
  [featchContactsSuccess]: () => false,
  [featchContactsError]: () => false,
  [addContactsRequest]: () => true,
  [addContactsSuccess]: () => false,
  [addContactsError]: () => false,
  [deleteContactsRequest]: () => true,
  [deleteContactsSuccess]: () => false,
  [deleteContactsError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
});
