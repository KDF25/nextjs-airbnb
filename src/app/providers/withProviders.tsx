"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";
import NextTopLoader from "nextjs-toploader";
import { ToastContainerBar } from "./withToaster";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  console.log("Providers rendered");
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <NextTopLoader />
      <ToastContainerBar />
    </>
  );
};
