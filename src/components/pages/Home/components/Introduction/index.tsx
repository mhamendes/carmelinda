import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Content from 'components/Content';
import Separator from 'components/Separator';

import Avatar from 'assets/images/avatar.webp';
import Infinity from 'assets/images/infinity.svg';

import baseStyles from '../../styles.module.scss';
import styles from './styles.module.scss';

const Introduction: React.FC = () => {
  const { t } = useTranslation('introduction');
  const { t: tCommon } = useTranslation('common');
  return (
    <div className={baseStyles.container} id={tCommon('introducao-id')}>
      <div className={styles.header}>
        <div className={styles['content-container']}>
          <div className={styles['image-container']}>
            <Image
              className={styles.image}
              src={Avatar}
              alt={tCommon('nome')}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className={styles['text-container']}>
            <h1 className={styles.h1}>{t('titulo')}</h1>
            <h2 className={styles.h2}>{t('subtitulo')}</h2>
          </div>
        </div>
      </div>
      <Content body={t('introducao-1')} />
      <Separator image={Infinity} alt="Infinito" />
      <Content body={t('introducao-2')} />
    </div>
  );
};

export default Introduction;
