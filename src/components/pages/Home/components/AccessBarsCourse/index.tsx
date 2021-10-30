import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import ListContent from 'components/ListContent';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';

import TitleImage from 'assets/images/dandelion.webp';
import SeparatorImage from 'assets/images/circles2.webp';

import styles from '../../styles.module.scss';

const AccessBarsCourse: React.FC = () => {
  const { t } = useTranslation('access-bars-course');
  const { t: tCommon } = useTranslation('common');

  return (
    <div className={styles.container} id={tCommon('curso-barras-de-access-id')}>
      <Title
        title={t('titulo-componente')}
        image={TitleImage}
        alt={t('titulo-componente')}
        right
      />
      <ListContent
        title={t('curso-barras-de-access-titulo')}
        list={t('curso-barras-de-access-texto', { returnObjects: true })}
      />
      <Separator image={SeparatorImage} alt="Barras de Access" />
      <ListContent
        title={t('saiba-mais')}
        list={t('saiba-mais-texto', { returnObjects: true })}
      />
      <ContactButton
        message={t('mensagem-whatsapp', { returnObjects: true })}
      />
    </div>
  );
};

export default AccessBarsCourse;
