import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import Content from 'components/Content';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';

import TitleImage from 'assets/images/meditation.webp';
import SeparatorImage from 'assets/images/circles.webp';

import styles from '../../styles.module.scss';

const Coach: React.FC = () => {
  const { t } = useTranslation('coach');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className={styles.container} id={tCommon('mentoria-individual-id')}>
      <Title
        title={t('titulo-componente')}
        image={TitleImage}
        alt={t('titulo-componente')}
        right
      />
      <Content
        title={t('mentoria-individual-titulo')}
        body={t('mentoria-individual-texto')}
      />
      <Separator image={SeparatorImage} alt="Mentoria Individual" />
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

export default Coach;
