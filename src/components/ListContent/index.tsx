import React from 'react';

import { parseLineBreak } from 'helpers/parsers';
import styles from './styles.module.scss';

type List = {
  title: string;
  body: string;
};

export interface Props {
  title?: string;
  list?: List[];
}

const ListContent: React.FC<Props> = ({ title, list }) => {
  return (
    <div className={styles.container}>
      {title && (
        <h3
          className={styles.h3}
          dangerouslySetInnerHTML={{ __html: parseLineBreak(title) }}
        />
      )}
      {list?.length &&
        list.map((item, index) => {
          return (
            <div
              key={item.title}
              className={
                index === list.length - 1
                  ? styles['no-margin-list-item']
                  : styles['list-item']
              }
            >
              <p className={styles['list-title']}>{item.title}</p>
              <p
                dangerouslySetInnerHTML={{ __html: parseLineBreak(item.body) }}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ListContent;
