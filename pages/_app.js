import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { store } from '../src/stores';
import '../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Component {...pageProps} />
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
