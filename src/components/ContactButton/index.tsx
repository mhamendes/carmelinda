import React from 'react';
import { useTranslation } from 'next-i18next';

import Button from 'components/ui-common/Button';

import styles from './styles.module.scss';

type Message = {
  questions: string;
  scheduling: string;
};

export interface Props {
  message: Message;
}

const ContactButton: React.FC<Props> = ({ message }) => {
  const { t } = useTranslation('contact-button');
  const { t: tCommon } = useTranslation('common');

  const handleClick = React.useCallback(
    (type: 'questions' | 'scheduling') => {
      return `https://api.whatsapp.com/send?phone=${tCommon('whatsapp')}&text=${
        message[type]
      }`;
    },
    [tCommon, message]
  );

  return (
    <div className={styles.container}>
      <Button layout="gold-button" newWindow href={handleClick('questions')}>
        {t('tirar-duvidas')}
      </Button>
      <Button layout="green-button" newWindow href={handleClick('scheduling')}>
        {t('agendar-sessao')}
      </Button>
    </div>
  );
};

export default ContactButton;
