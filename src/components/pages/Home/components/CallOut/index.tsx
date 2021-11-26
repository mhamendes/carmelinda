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
  const [displayElement, setDisplayElement] = React.useState<any>([]);

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

  let index = 0;
  React.useEffect(() => {
    const interval = setInterval(() => {
      const element = (
        <div
          className={styles['menu-item']}
          key={`${options[index].link}-button`}
        >
          <Button
            layout="menu-button"
            href={options[index].link}
            anchor={options[index].anchor}
            dangerouslySetInnerHTML={{
              __html: parseLineBreak(options[index].label),
            }}
          />
        </div>
      );
      setDisplayElement((oldArray: any) => [...oldArray, element]);
      index++;
      if (index >= options.length) {
        clearInterval(interval);
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {displayElement.map((item: any) => {
            return item;
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
