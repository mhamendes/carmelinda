import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import Content from 'components/Content';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';

import TitleImage from 'assets/images/flower.webp';
import SeparatorImage from 'assets/images/circles3.webp';

import styles from '../../styles.module.scss';

const GemellarConstellations: React.FC = () => {
  const { t } = useTranslation('gemellar-constellations');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className={styles.container} id={tCommon('constelacao-gemellar-id')}>
      <Title
        title={t('titulo-componente')}
        image={TitleImage}
        alt={t('titulo-componente')}
        right
      />
      <Content
        title={t('constelacao-gemellar-titulo')}
        body={t('constelacao-gemellar-texto')}
      />
      <Separator image={SeparatorImage} alt="Constelação Gemellar" />
      <Content
        title={t('como-funciona-titulo')}
        body={t('como-funciona-texto')}
        bottomText={t('como-funciona-ps')}
      />
      <ContactButton
        message={t('mensagem-whatsapp', { returnObjects: true })}
      />
    </div>
  );
};

export default GemellarConstellations;
