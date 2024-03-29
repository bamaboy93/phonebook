import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./auth-operations";
import avatarOperations from "../avatar/avatar-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
  avatarUrl: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = true;
    },
    unsetLoader: (state, action) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [authOperations.signUp.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.signUp.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.signUp.fulfilled](state, action) {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logIn.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.data;
      state.token = action.payload.token;
      state.avatarUrl = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.getGoogleAuth.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.getGoogleAuth.rejected](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = true;
    },
    [authOperations.getGoogleAuth.fulfilled](state, action) {
      state.user = action.payload.data.user;
      // state.token = action.payload.data.token;
      // state.avatarUrl = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.getGoogleRedirect.fulfilled](state, action) {
      state.user = action.payload.data;
      // state.token = action.payload.data.token;
      // state.avatarUrl = action.payload.data.avatar;
      // state.isLoggedIn = true;
      // state.isLoading = false;
    },
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
      state.error = false;
    },
    [authOperations.logOut.rejected](state) {
      state = {
        ...state,
        isLoading: false,
        error: true,
      };
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.refreshCurrentUser.pending](state, _) {
      state.isLoading = true;
      state.isRefreshCurrentUser = true;
    },
    [authOperations.refreshCurrentUser.rejected](state, _) {
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isRefreshCurrentUser = false;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload.data;
      state.avatarUrl = action.payload.data.avatar;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isRefreshCurrentUser = false;
    },

    [avatarOperations.setAvatar.pending](state, action) {
      state.isLoading = true;
      state.error = false;
    },
    [avatarOperations.setAvatar.fulfilled](state, action) {
      state.isLoading = false;
      state.avatarUrl = action.payload.data.avatar;
    },
    [avatarOperations.setAvatar.rejected](state, action) {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setLoader, unsetLoader } = authSlice.actions;
export default authSlice.reducer;
