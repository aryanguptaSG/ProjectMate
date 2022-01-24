import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'
import Footer from './components/footer';
import {  Provider } from "react-redux";
import store from '../redux-store/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
      </Provider>
    </>
  );
}

export default MyApp
