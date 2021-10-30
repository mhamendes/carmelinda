import React from 'react';

import Image from 'next/image';

import styles from './styles.module.scss';

export interface Props {
  image: string;
  alt: string;
  large?: boolean;
}

const Separator: React.FC<Props> = ({ image, alt, large }) => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div
        className={
          large ? styles['image-container-large'] : styles['image-container']
        }
      >
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default Separator;
