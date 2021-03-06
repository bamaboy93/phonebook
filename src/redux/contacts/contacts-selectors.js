import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.contacts.loading;

const getContacts = (state) => state.contacts.items;

const getFilter = (state) => state.contacts.filter;

const getPage = (state) => state.contacts.page;

const getTotalPages = (state) => state.contacts.totalPages;

const getTotalContacts = (state) => state.contacts.totalDocs;

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
  getTotalContacts,
  getPage,
  getTotalPages,
};
export default contactsSelectors;

// import { createSelector } from "@reduxjs/toolkit";

// const getLoading = (state) => state.contacts.isLoading;

// const getContacts = (state) => state.contacts.cdata;

// const getFilter = (state) => state.contacts.filter;

// const getPage = (state) => state.contacts.page;

// const getTotalPages = (state) => state.contacts.totalPages;

// const getTotalContacts = (state) => state.contacts.totalDocs;

// const getFilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();

//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );

// const contactsSelectors = {
//   getLoading,
//   getContacts,
//   getFilter,
//   getFilteredContacts,
//   getTotalContacts,
//   getPage,
//   getTotalPages,
// };
// export default contactsSelectors;
