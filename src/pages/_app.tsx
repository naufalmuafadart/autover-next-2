import React from 'react';
import '@/styles/global.css';
import '@/styles/library/button.css';
import '@/styles/library/font.css';
import '@/styles/library/layouting.css';
import '@/styles/library/sizing.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
