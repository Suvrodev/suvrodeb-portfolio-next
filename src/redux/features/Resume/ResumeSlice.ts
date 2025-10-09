import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface TMobileFooterState {
  isOpen: boolean;
}

// Define the initial state using that type
const initialState: TMobileFooterState = {
  isOpen: false,
};

export const MobileFooterSlice = createSlice({
  name: "mobileFooterSlice",
  initialState,
  reducers: {
    setIsOpenMobileFooter: (state, action) => {
      const isOpen = action.payload;
      console.log("Get isOpen: ", isOpen);
      state.isOpen = isOpen;
    },
  },
});

export const { setIsOpenMobileFooter } = MobileFooterSlice.actions;
export default MobileFooterSlice.reducer;
