import { createSlice } from "@reduxjs/toolkit";
import contactsOperations from "./contacts-operations";
import authOperations from "../auth/auth-operations";

const initialState = {
  contacts: [],
  contact: { name: "", phone: "" },
  filter: "",
  page: 1,
  totalPages: "",
  isLoading: false,
  error: false,
};

const contactsSlice = createSlice({
  name: "items",
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
      state.contacts = [...state.contacts];

      state.isLoading = false;
      state.error = true;
    },
    [contactsOperations.fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload.contacts;

      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    [contactsOperations.addContact.pending](state, action) {
      state.contacts = action.payload;
      state.isLoading = true;
      state.error = false;
    },
    [contactsOperations.addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [contactsOperations.addContact.fulfilled](state, action) {
      state.contacts = action.payload.contact;
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    // [editTransaction.pending](state, action) {
    //   state.isLoading = true;
    //   state.error = false;
    // },
    // [editTransaction.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = true;
    // },
    // [editTransaction.fulfilled](state, action) {
    //   state.finance = [...action.payload.transactions];
    //   state.totalPages = action.payload.pageInfo.totalPages;
    //   state.isLoading = false;
    // },
    [contactsOperations.deleteContact.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [contactsOperations.deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [contactsOperations.deleteContact.fulfilled](state, action) {
      state.contacts = [...action.payload];
      state.totalPages = action.payload.totalPages;
      state.isLoading = false;
    },
    // [authOperations.logOut.fulfilled](state) {
    //   state.page = 1;
    // },
  },
});

export const { filter } = contactsSlice.actions;
export const { paginationContact } = contactsSlice.actions;
export default contactsSlice.reducer;
