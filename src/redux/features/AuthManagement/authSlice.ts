import { Tuser } from "@/components/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TAuthState {
  user: null | Tuser;
  token: null | string;
}

// Define the initial state using that type
const initialState: TAuthState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const getUser: Tuser = action.payload;
      console.log("Get user: ", getUser);
      state.user = getUser;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUserData, logOut } = userSlice.actions;
export default userSlice.reducer;
