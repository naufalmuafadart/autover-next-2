import React from 'react';
import '@/styles/global.css';
import '@/styles/library/button.css';
import '@/styles/library/font.css';
import '@/styles/library/form.css';
import '@/styles/library/layouting.css';
import '@/styles/library/sizing.css';
import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className} id="mainDocument">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
  );
}
