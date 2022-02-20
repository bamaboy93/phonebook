import axios from "axios";

import * as actions from "./contacts-actions";

axios.defaults.baseURL = "https://phonebooknodejs.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get(`api/contacts`);
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};

const addContact = (name, phone) => async (dispatch) => {
  const contact = {
    name,
    phone,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post("api/contacts", contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = (contactId) => async (dispatch) => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`api/contacts/${contactId}`);
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
