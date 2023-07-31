import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
