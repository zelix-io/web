import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import '@/styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { DefaultSeo } from 'next-seo';

const DEFAULT_SEO = {
  title: 'Zelix',
  description: 'Zelix',
  canonical: 'https://www.zelix.com',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.zelix.com',
    title: 'Zelix',
    site_name: 'Zelix',
    images: [
      {
        url: '/images/zx-logo.png',
        width: 285,
        height: 167,
        alt: '이미지',
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
      <DefaultSeo {...DEFAULT_SEO} />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
