import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://phonebooknodejs.herokuapp.com";

const fetchContacts = createAsyncThunk(
  "contacts/getContacts",

  async ({ page, thunkAPI }) => {
    try {
      const { data } = await axios.get(
        `api/contacts?page=${page}&sortByDesc=date%7CcreatedAt`
      );
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContact",

  async ({ name, phone, page, thunkAPI }) => {
    try {
      const { data } = await axios.post(
        `api/contacts?page=${page}&sortByDesc=date%7CcreatedAt`,
        name,
        phone
      );
      return data.data;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, page, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `api/contacts/${contactId}?page=${page}&sortByDesc=date%7CcreatedAt`
      );
      return data.data;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default contactsOperations;
