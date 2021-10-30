import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'components/Head';
import Header from 'components/Header';
import HomePage from 'components/pages/Home';
import Image from 'next/image';
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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
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
        'header',
        'contact-button',
        'coach',
        'access-bars',
        'access-bars-course',
      ])),
    },
  };
};

export default Home;
