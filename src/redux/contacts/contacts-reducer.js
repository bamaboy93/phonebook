import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => [...action.payload.contacts],
  [actions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload.data.contact,
  ],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

const totalPages = createReducer("", {
  [actions.fetchContactsSuccess]: (state, action) => action.payload.totalPages,
});

const page = createReducer(1, {
  [actions.changePage]: (state, action) => action.payload,
});

const totalDocs = createReducer("", {
  [actions.fetchContactsSuccess]: (state, action) => action.payload.totalDocs,
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  loading,
  error,
  page,
  totalPages,
  totalDocs,
});
