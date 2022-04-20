import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://phonebooknodejs.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("api/users/signup", credentials);
      token.set(data.token);

      toast.success(
        "Account verification message sent on your e-mail. Verify account and signIn."
      );
      return data;
    } catch ({ response }) {
      toast.error(response.data.message);
      return thunkAPI.rejectWithValue();
    }
  }
);

const logIn = createAsyncThunk("auth/signin", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("api/users/signin", credentials);
    token.set(data.token);
    toast.success("Welcome to your Phonebook!");
    return data;
  } catch ({ response }) {
    if (response.data.message === "User email not verified yet.") {
      toast.error(response.data.message);
    } else {
      toast.error(response.data.message);
    }
    return thunkAPI.rejectWithValue();
  }
});

const logInByGoogle = createAsyncThunk(
  "auth/loginByGoogle",
  async (extractedToken, thunkAPI) => {
    try {
      const { data } = await axios.post("api/users/loginByGoogle", {
        token: extractedToken,
      });
      token.set(data.token);
      toast.success("Welcome to your Phonebook!");
      return data;
    } catch ({ response }) {
      if (response.data.message === "User email not verified yet.") {
        toast.error(response.data.message);
      } else {
        toast.error(response.data.message);
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const logOut = createAsyncThunk("auth/users/signout", async (_, thunkAPI) => {
  try {
    await axios.post("api/users/signout");
    token.unset();
  } catch (error) {
    if (error.response.statusText === "Unauthorized") {
      window.location.reload();
    }
    return thunkAPI.rejectWithValue();
  }
});

const refreshCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);
      const res = await axios.get("api/users/current");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const authOperations = {
  signUp,
  logIn,
  logOut,
  refreshCurrentUser,
  logInByGoogle,
};

export default authOperations;
