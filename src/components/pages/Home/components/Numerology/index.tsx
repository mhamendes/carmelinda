import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import Content from 'components/Content';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';

import TitleImage from 'assets/images/compass.webp';
import SeparatorImage from 'assets/images/mandala2.webp';

import styles from '../../styles.module.scss';

const Numerology: React.FC = () => {
  const { t } = useTranslation('numerology');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className={styles.container} id={tCommon('bussula-de-nascimento-id')}>
      <Title
        title={t('titulo-componente')}
        image={TitleImage}
        alt={t('titulo-componente')}
      />
      <Content title={t('numerologia-titulo')} body={t('numerologia-texto')} />
      <Separator image={SeparatorImage} alt="Numerologia" large />
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

export default Numerology;
