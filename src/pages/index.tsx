import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'components/Head';
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'components/pages/Home';

import styles from 'styles/pages/home.module.scss';

const Home: NextPage = () => {
  const router = useRouter();
  const { params } = router.query;

  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    document.getElementById(params?.[0] || '')?.scrollIntoView();
  }, [params]);

  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const callOutHeight = document.getElementById('callout')?.clientHeight || 0;

    setIsVisible(scrollTop > callOutHeight - 86);
  };

  return (
    <div className={styles.container} onScroll={(event) => handleScroll(event)}>
      <Head />
      {isVisible && <Header />}
      <HomePage isVisible={isVisible} />
      <Footer />
    </div>
  );
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
        'callout',
      ])),
    },
  };
};

export default Home;
