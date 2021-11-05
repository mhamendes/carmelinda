import React from 'react';
import { useTranslation } from 'next-i18next';

import Title from 'components/Title';
import Content from 'components/Content';
import Separator from 'components/Separator';
import ContactButton from 'components/ContactButton';
import { useElementIsVisible } from 'hooks/useElementIsVisible';

import TitleImage from 'assets/images/headMassage.webp';
import SeparatorImage from 'assets/images/mandala.webp';

import styles from '../../styles.module.scss';

const AccessBars: React.FC = () => {
  const { t } = useTranslation('access-bars');
  const { t: tCommon } = useTranslation('common');

  const ref = React.useRef<HTMLDivElement>(null);
  const isVisible = useElementIsVisible('0px', false, ref.current);

  return (
    <div
      ref={ref}
      className={styles.container}
      id={tCommon('barras-de-access-id')}
    >
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
      {isVisible && (
        <div className={styles['video-container']}>
          <iframe
            width="640px"
            height="360px"
            src={t('video-url')}
            frameBorder="0"
            allow="accelerometer;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            plays-in-line"
            allowFullScreen
            title={t('titulo-componente')}
          ></iframe>
        </div>
      )}
      <ContactButton
        message={t('mensagem-whatsapp', { returnObjects: true })}
      />
    </div>
  );
};

export default AccessBars;
