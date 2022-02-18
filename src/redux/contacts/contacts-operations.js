import axios from "axios";
import * as actions from "./contacts-actions";

axios.defaults.baseURL = "https://phonebooknodejs.herokuapp.com";

const setToken = (token) => {
  if (!axios.defaults.headers.common.Authorization)
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const fetchContacts =
  () =>
  async ({ token, page }, dispatch) => {
    dispatch(actions.fetchContactsRequest());

    try {
      setToken(token);
      const { data } = await axios.get(`api/contacts?limit=5&page=${page}`);
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error));
    }
  };

const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post("api/contacts", contact);
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};

const deleteContact = (id) => async (dispatch) => {
  dispatch(actions.deleteContactRequest());

  try {
    await axios.delete(`api/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
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
