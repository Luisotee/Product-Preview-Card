import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Product Preview</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100;9..144,400&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,100;9..144,400&family=Montserrat&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
