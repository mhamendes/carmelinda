import React from 'react';

import { parseLineBreak } from 'helpers/parsers';
import styles from './styles.module.scss';

export interface Props {
  title?: string;
  body?: string;
}

const Content: React.FC<Props> = ({ title, body }) => {
  return (
    <div className={styles.container}>
      {title && <h3 className={styles.h3}>{title}</h3>}
      {body && <p dangerouslySetInnerHTML={{ __html: parseLineBreak(body) }} />}
    </div>
  );
};

export default Content;
