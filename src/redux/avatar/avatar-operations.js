import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://phonebooknodejs.herokuapp.com";

const setAvatar = createAsyncThunk(
  "avatar/setAvatar",
  async (avatarFile, thunkAPI) => {
    try {
      const { data } = await axios.patch("api/users/avatar", avatarFile);
      return data.data.avatar;
    } catch (error) {
      if (error.response.statusText === "Unauthorized") {
        window.location.reload();
      }
      return thunkAPI.rejectWithValue();
    }
  }
);

const avatarOperations = {
  setAvatar,
};
export default avatarOperations;
