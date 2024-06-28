"use client";

import { Provider } from "react-redux";
import store from "./store";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <NextUIProvider>{children}</NextUIProvider>
    </Provider>
  );
}
