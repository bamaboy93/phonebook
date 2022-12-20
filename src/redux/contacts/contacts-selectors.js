import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getPage = (state) => state.contacts.page;

const getTotalPages = (state) => state.contacts.totalPages;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getContacts,
  getFilter,
  getFilteredContacts,

  getPage,
  getTotalPages,
};
export default contactsSelectors;
