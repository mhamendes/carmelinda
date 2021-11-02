import React from 'react';
import { useTranslation } from 'next-i18next';

import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

import Button from 'components/ui-common/Button';

import styles from './styles.module.scss';

export interface Props {
  type?: 'large' | 'small';
}

const WhatsAppButton: React.FC<Props> = ({ type }) => {
  const { t } = useTranslation('common');

  const whatsAppLink = React.useMemo(() => {
    return `https://api.whatsapp.com/send?phone=${t('whatsapp')}&text=${t(
      'mensagem-whatsapp'
    )}`;
  }, [t]);

  return (
    <Button
      layout="green-button"
      href={whatsAppLink}
      newWindow
      className={styles[`contact-button${type || ''}`]}
    >
      {t('botao-contato')}
      <div className={styles[`whatsApp-container${type || ''}`]}>
        <FaWhatsapp className={styles[`whatsApp${type || ''}`]} />
      </div>
    </Button>
  );
};

export default WhatsAppButton;
