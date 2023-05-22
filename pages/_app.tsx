import React from "react";
import type { AppProps } from "next/app";
import "@styles/styles.css";
import DefaultLayout from "@layout/DefaultLayout/DefaultLayout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
