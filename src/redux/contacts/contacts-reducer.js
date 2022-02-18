import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const items = createReducer([], {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
