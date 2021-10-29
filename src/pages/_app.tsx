import React from 'react';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import 'styles/main.scss';
import nextI18nextConfig from 'next-i18next.config';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App, nextI18nextConfig);
