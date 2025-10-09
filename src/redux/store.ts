import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/BaseApi/baseApi";
import authSlice from "./features/AuthManagement/authSlice";
import mobileFooterSlice from "./features/Resume/ResumeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    mobileFooterStore: mobileFooterSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
