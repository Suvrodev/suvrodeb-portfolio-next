import { TAuthuser } from "@/components/types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TAuthState {
  user: null | TAuthuser;
  token: null | string;
}

// Define the initial state using that type
const initialState: TAuthState = {
  user: null,
  token: null,
};

export const userSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { user, token } = action.payload;
      console.log("Get user: ", user);
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setUserData, logOut } = userSlice.actions;
export default userSlice.reducer;
