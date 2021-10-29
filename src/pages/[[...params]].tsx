import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'components/Head';
import Header from 'components/Header';
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
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card} id="documentation">
            <Link href="#deploy" replace as="deploy" passHref>
              <div>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </div>
            </Link>
          </div>

          <a href="https://nextjs.org/learn" className={styles.card} id="learn">
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
            id="examples"
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            id="deploy"
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
      ...(await serverSideTranslations(locale!, ['common', 'header'])),
    },
  };
};

export default Home;
