import React from 'react';
import Image from 'next/image';

import styles from './styles.module.scss';

export interface Props {
  title: string;
  image: string;
  alt: string;
  right?: boolean;
}

const Title: React.FC<Props> = ({ title, image, alt, right }) => {
  return (
    <div className={right ? styles['right-container'] : styles.container}>
      <div className={styles['text-container']}>
        <h2>{title}</h2>
      </div>
      <div className={styles['image-container']}>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Title;
