"use client";
import { store } from "@/redux/store";
import { SnackbarProvider } from "notistack";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";

interface IProps {
  children: ReactNode;
}
const Providers = ({ children }: IProps) => {
  return (
    <Provider store={store}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {children}
        <Toaster />
      </SnackbarProvider>
    </Provider>
  );
};

export default Providers;
