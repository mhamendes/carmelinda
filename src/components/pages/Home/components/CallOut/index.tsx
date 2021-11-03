import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { parseLineBreak } from 'helpers/parsers';

import LeavesRight from 'assets/images/leavesRight.webp';
import LeavesLeft from 'assets/images/leavesLeft.webp';
import Logo from 'assets/images/logo.webp';

import Button from 'components/ui-common/Button';
import WhatsAppButton from 'components/WhatsAppButton';
import Drawer from 'components/Header/components/Drawer';

import styles from './styles.module.scss';

export interface Props {
  isVisible: boolean;
}

const CallOut: React.FC<Props> = ({ isVisible }) => {
  const { t } = useTranslation('callout');
  const { t: tCommon } = useTranslation('common');

  const options = React.useMemo(() => {
    return [
      {
        label: t('mentoria-titulo'),
        link: tCommon('mentoria-individual-id'),
        anchor: true,
      },
      {
        label: t('barras-de-access-titulo'),
        link: tCommon('barras-de-access-id'),
        anchor: true,
      },
      {
        label: t('curso-barras-de-access-titulo'),
        link: tCommon('curso-barras-de-access-id'),
        anchor: true,
      },
      {
        label: t('contelacao-familiar-titulo'),
        link: tCommon('constelacao-familiar-id'),
        anchor: true,
      },
      {
        label: t('constelacao-gemellar-titulo'),
        link: tCommon('constelacao-gemellar-id'),
        anchor: true,
      },
      {
        label: t('bussola-de-nascimento-titulo'),
        link: tCommon('bussula-de-nascimento-id'),
        anchor: true,
      },
    ];
  }, [t, tCommon]);

  return (
    <div className={styles.container} id={tCommon('callout-id')}>
      <div className={styles.header}>
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
        <div className={styles['contact-button']}>
          <WhatsAppButton type="large" />
        </div>
        {!isVisible && (
          <div className={styles['menu-icon']}>
            <Drawer options={[]} />
          </div>
        )}
      </div>
      <div className={styles['content-container']}>
        <div
          className={styles.leaves}
          style={{
            backgroundImage: `url(${LeavesLeft})`,
            backgroundPosition: 'bottom left',
          }}
        />
        <div className={styles.menu}>
          {options.map((item) => {
            return (
              <div className={styles['menu-item']} key={`${item.link}-button`}>
                <Button
                  layout="menu-button"
                  href={item.link}
                  anchor={item.anchor}
                  dangerouslySetInnerHTML={{
                    __html: parseLineBreak(item.label),
                  }}
                />
              </div>
            );
          })}
        </div>
        <div
          className={styles.leaves}
          style={{
            backgroundImage: `url(${LeavesRight})`,
            backgroundPosition: 'bottom right',
          }}
        />
      </div>
    </div>
  );
};

export default CallOut;
