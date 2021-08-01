import axios from 'axios';

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
} from './action_phonebook';

export const featchContacts = () => async dispatch => {
  dispatch(featchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(featchContactsSuccess(data)))
    .catch(error => dispatch(featchContactsError(error.message)));
};

export const addContact = (name, number) => dispatch => {
  const contact = { name, number };

  dispatch(addContactsRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactsSuccess(data)))
    .catch(error => dispatch(addContactsError(error.message)));
};

export const deleteContact = idContact => dispatch => {
  dispatch(deleteContactsRequest());

  axios
    .delete(`/contacts/${idContact}`)
    .then(() => dispatch(deleteContactsSuccess(idContact)))
    .catch(error => dispatch(deleteContactsError(error.message)));
};

export default { addContact, deleteContact, featchContacts };
