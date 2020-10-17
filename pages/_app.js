import App from 'next/app';
import React, { useEffect } from 'react';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../src/containers/Footer';
import { store } from '../src/stores';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
