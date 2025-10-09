"use client";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

import InnerProvider from "./InnerProvider";

interface IProps {
  children: ReactNode;
}
const Providers = ({ children }: IProps) => {
  return (
    <Provider store={store}>
      <InnerProvider>{children}</InnerProvider>
    </Provider>
  );
};

export default Providers;
