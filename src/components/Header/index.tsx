import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Logo from 'assets/images/onlyLogo.webp';

import Navigator from './components/Navigator';
import Drawer from './components/Drawer';
import styles from './styles.module.scss';

export type Option = {
  label: string;
  link: string;
  anchor: boolean;
};

const Header: React.FC = () => {
  const { t } = useTranslation('common');

  const options = React.useMemo<Option[]>(() => {
    return [
      {
        label: t('coach'),
        link: t('mentoria-individual-id'),
        anchor: true,
      },
      {
        label: t('barras-de-access'),
        link: t('barras-de-access-id'),
        anchor: true,
      },
      {
        label: t('curso'),
        link: t('curso-barras-de-access-id'),
        anchor: true,
      },
      {
        label: t('numerologia'),
        link: t('bussula-de-nascimento-id'),
        anchor: true,
      },
      {
        label: t('constelacao-familiar'),
        link: t('constelacao-familiar-id'),
        anchor: true,
      },
      {
        label: t('constelacao-gemellar'),
        link: t('constelacao-gemellar-id'),
        anchor: true,
      },
    ];
  }, [t]);

  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles['button-container']}>
        <Navigator options={options} />
        <Drawer options={options} />
      </div>
    </div>
  );
};

export default Header;
