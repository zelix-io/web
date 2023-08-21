import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const DEFAULT_SEO = {
  title: 'ZELIX',
  description: 'ZELIX',
  keywords:"zelix, ZELIX, onston, 젤릭스, 온스톤, onston.network",
  canonical: 'https://www.zelix.io',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.zelix.io',
    title: 'ZELIX',
    site_name: 'ZELIX',
    images: [
      {
        url: '/images/zx-logo.png',
        width: 285,
        height: 167,
        alt: 'logo',
      },
    ],
  },
};

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultSeo {...DEFAULT_SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
