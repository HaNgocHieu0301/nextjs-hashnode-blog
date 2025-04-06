import type { AppProps } from 'next/app';
import { AppProvider } from '../components/contexts/appContext';
import { appWithTranslation } from 'next-i18next';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppProvider 
      publication={pageProps.publication} 
      post={pageProps.post} 
      page={pageProps.page}
      series={pageProps.series}
    >
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default appWithTranslation(MyApp);