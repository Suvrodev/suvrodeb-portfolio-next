import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./apis/BaseApi/baseApi";
import userSlice from "./features/AuthManagement/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
