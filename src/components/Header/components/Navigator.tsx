import React from 'react';

import Button from 'components/ui-common/Button';
import WhatsAppButton from 'components/WhatsAppButton';

import { Option } from '../index';
import styles from '../styles.module.scss';

export interface Props {
  options: Option[];
}

const components: React.FC<Props> = ({ options }) => {
  return (
    <div className={styles['navigator-container']}>
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
      <WhatsAppButton />
    </div>
  );
};

export default components;
