import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'components/Head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'components/pages/Home';

import styles from 'styles/pages/home.module.scss';
import { useElementIsVisible } from 'hooks/useElementIsVisible';

const Home: NextPage = () => {
  const router = useRouter();
  const { params } = router.query;

  React.useEffect(() => {
    document.getElementById(params?.[0] || '')?.scrollIntoView();
  }, [params]);

  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useElementIsVisible('-70px', true, ref.current);

  return (
    <div>
      <Head />
      <main className={styles.main}>
        {isVisible && <Header />}
        <HomePage />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: ['/'],
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'contact-button',
        'coach',
        'access-bars',
        'access-bars-course',
        'numerology',
        'familiar-constellations',
        'gemellar-constellations',
        'introduction',
      ])),
    },
  };
};

export default Home;
