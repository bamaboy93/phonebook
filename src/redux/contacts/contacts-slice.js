import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";
import authOperations from "../auth/auth-operations";

const initialState = {
  items: [],
  filter: "",
  page: 1,
  totalPages: "",
  isLoading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    paginationContact: (state, action) => {
      state.page = action.payload;
    },
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [contactsOperations.fetchContacts.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [contactsOperations.fetchContacts.rejected](state, action) {
      state.items = [...state.items];

      state.isLoading = false;
      state.error = true;
    },
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.items = [...action.payload.contacts];
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    [contactsOperations.addContact.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [contactsOperations.addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.items = [...state, action.payload.contact];
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },

    [contactsOperations.deleteContact.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [contactsOperations.deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.items = state.filter(({ id }) => id !== action.payload);
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    [authOperations.logOut.fulfilled](state) {
      state.page = 1;
    },
  },
});

export const { filter } = contactsSlice.actions;
export const { paginationContact } = contactsSlice.actions;
export default contactsSlice.reducer;
