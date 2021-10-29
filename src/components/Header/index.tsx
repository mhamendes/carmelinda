import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

import Button from 'components/ui-common/Button';
import Logo from 'assets/images/onlyLogo.webp';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  const { t: tCommon } = useTranslation('common');
  const { t: tHeader } = useTranslation('header');

  const options = React.useMemo(() => {
    return [
      {
        label: tCommon('coach'),
        link: tCommon('mentoria-individual-id'),
        anchor: true,
      },
      {
        label: tCommon('barras-de-access'),
        link: tCommon('barras-de-access-id'),
        anchor: true,
      },
      {
        label: tCommon('curso'),
        link: tCommon('curso-barras-de-access-id'),
        anchor: true,
      },
      {
        label: tCommon('constelacao-familiar'),
        link: tCommon('constelacao-familiar-id'),
        anchor: true,
      },
      {
        label: tCommon('constelacao-gemellar'),
        link: tCommon('constelacao-gemellar-id'),
        anchor: true,
      },
      {
        label: tCommon('numerologia'),
        link: tCommon('bussula-de-nascimento-id'),
        anchor: true,
      },
    ];
  }, [tCommon]);

  const whatsAppLink = React.useMemo(() => {
    return `https://api.whatsapp.com/send?phone=${tCommon(
      'whatsapp'
    )}&text=${tHeader('mensagem-whatsapp')}`;
  }, [tCommon, tHeader]);

  return (
    <div className={styles.container}>
      <div className={styles['logo-container']}>
        <Image
          className={styles.logo}
          src={Logo}
          alt="Logo"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>
      <div className={styles['button-container']}>
        {options.map((item) => {
          return (
            <Button
              key={item.label}
              layout="link"
              href={item.link}
              anchor={item.anchor}
              className={styles.button}
            >
              {item.label}
            </Button>
          );
        })}
        <Button
          layout="green-button"
          href={whatsAppLink}
          newWindow
          className={styles['contact-button']}
        >
          {tHeader('botao-contato')}
          <div className={styles['whatsApp-container']}>
            <FaWhatsapp className={styles.whatsApp} />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Header;
