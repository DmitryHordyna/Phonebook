//module
import { createAction } from '@reduxjs/toolkit';

export const featchContactsRequest = createAction(
  'contact/featchContactsRequest',
);
export const featchContactsSuccess = createAction(
  'contact/featchContactsSuccess',
);
export const featchContactsError = createAction('contact/featchContactsError');

export const addContactsRequest = createAction('contact/addContactsRequest');
export const addContactsSuccess = createAction('contact/addContactsSuccess');
export const addContactsError = createAction('contact/addContactsError');

export const deleteContactsRequest = createAction(
  'contact/deleteContactsRequest',
);
export const deleteContactsSuccess = createAction(
  'contact/deleteContactsSuccess',
);
export const deleteContactsError = createAction('contact/deleteContactsError');

export const filterContact = createAction('contact/filter');
