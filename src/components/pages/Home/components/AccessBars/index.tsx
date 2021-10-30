import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import Content from 'components/Content';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';

import TitleImage from 'assets/images/headMassage.webp';
import SeparatorImage from 'assets/images/mandala.webp';

import styles from '../../styles.module.scss';

const AccessBars: React.FC = () => {
  const { t } = useTranslation('access-bars');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className={styles.container} id={tCommon('barras-de-access-id')}>
      <Title
        title={t('titulo-componente')}
        image={TitleImage}
        alt={t('titulo-componente')}
      />
      <Content
        title={t('barras-de-access-titulo')}
        body={t('barras-de-access-texto')}
      />
      <Separator image={SeparatorImage} alt="Barras de Access" large />
      <Content
        title={t('como-funciona-titulo')}
        body={t('como-funciona-texto')}
      />
      <ContactButton
        message={t('mensagem-whatsapp', { returnObjects: true })}
      />
    </div>
  );
};

export default AccessBars;
