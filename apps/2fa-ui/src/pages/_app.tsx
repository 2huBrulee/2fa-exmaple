import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to 2fa-ui!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
