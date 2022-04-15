import axios from "axios";

import * as actions from "./contacts-actions";

axios.defaults.baseURL = "https://phonebooknodejs.herokuapp.com";

const fetchContacts = (page) => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get(`api/contacts?limit=5&page=${page}`);
    dispatch(actions.fetchContactsSuccess(data.data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

const addContact = (name, phone, page) => async (dispatch) => {
  const contact = {
    name,
    phone,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post(
      `api/contacts?limit=5&page=${page}&sortByDesc=date%7CcreatedAt`,
      contact
    );
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = (contactId, page) => async (dispatch) => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(
      `api/contacts/${contactId}?limit=5&page=${page}&sortByDesc=date%7CcreatedAt`
    );
    dispatch(actions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
