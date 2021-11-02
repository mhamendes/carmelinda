import React from 'react';

import { parseLineBreak } from 'helpers/parsers';
import styles from './styles.module.scss';

export interface Props {
  title?: string;
  subtitle?: string;
  bodyTitle?: string;
  body?: string;
  bottomText?: string;
}

const Content: React.FC<Props> = ({
  title,
  subtitle,
  bodyTitle,
  body,
  bottomText,
}) => {
  return (
    <div className={styles.container}>
      {title && (
        <h3
          className={styles.h3}
          dangerouslySetInnerHTML={{ __html: parseLineBreak(title) }}
        />
      )}
      {subtitle && (
        <p
          className={styles.subtitle}
          dangerouslySetInnerHTML={{ __html: parseLineBreak(subtitle) }}
        />
      )}
      {bodyTitle && (
        <p
          className={styles.bodyTitle}
          dangerouslySetInnerHTML={{ __html: parseLineBreak(bodyTitle) }}
        />
      )}
      {body && <p dangerouslySetInnerHTML={{ __html: parseLineBreak(body) }} />}
      {bottomText && (
        <p
          className={styles.bottomText}
          dangerouslySetInnerHTML={{ __html: parseLineBreak(bottomText) }}
        />
      )}
    </div>
  );
};

export default Content;
