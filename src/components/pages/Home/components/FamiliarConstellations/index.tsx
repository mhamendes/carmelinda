import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import Content from 'components/Content';
import ListContent from 'components/ListContent';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';

import TitleImage from 'assets/images/tree.webp';
import SeparatorImage from 'assets/images/curves.webp';

import styles from '../../styles.module.scss';

const FamiliarConstellations: React.FC = () => {
  const { t } = useTranslation('familiar-constellations');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className={styles.container} id={tCommon('constelacao-familiar-id')}>
      <Title
        title={t('titulo-componente')}
        image={TitleImage}
        alt={t('titulo-componente')}
        right
      />
      <Content
        title={t('constelacao-familiar-titulo')}
        subtitle={t('constelacao-familiar-subtitulo')}
        bodyTitle={t('constelacao-familiar-titulo-texto')}
        body={t('constelacao-familiar-texto')}
      />
      <Separator image={SeparatorImage} alt="Constelação Familiar" />
      <ListContent
        title={t('como-funciona-titulo')}
        list={t('como-funciona-texto', { returnObjects: true })}
      />
      <ContactButton
        message={t('mensagem-whatsapp', { returnObjects: true })}
      />
    </div>
  );
};

export default FamiliarConstellations;
