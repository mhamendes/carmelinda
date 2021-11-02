import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF';
import { FaInstagram } from '@react-icons/all-files/fa/FaInstagram';

import Logo from 'assets/images/logo.webp';
import WhatsAppButton from 'components/WhatsAppButton';

import styles from './styles.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation('common');

  const socialUrls = React.useMemo(() => {
    return {
      facebook: t('facebook'),
      instagram: t('instagram'),
      whatsApp: `https://api.whatsapp.com/send?phone=${t('whatsapp')}&text=${t(
        'mensagem-whatsapp'
      )}`,
    };
  }, [t]);

  const handleClick = React.useCallback((url: string) => {
    window.open(url);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles['contact-button-container']}>
        <WhatsAppButton type="large" />
      </div>
      <div className={styles['social-container']}>
        <div
          className={styles['social-button']}
          onClick={() => handleClick(socialUrls.whatsApp)}
        >
          <FaWhatsapp className={styles['social-logo']} />
        </div>
        <div
          className={styles['social-button']}
          onClick={() => handleClick(socialUrls.facebook)}
        >
          <FaFacebookF className={styles['social-logo']} />
        </div>
        <div
          className={styles['social-button']}
          onClick={() => handleClick(socialUrls.instagram)}
        >
          <FaInstagram className={styles['social-logo']} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
