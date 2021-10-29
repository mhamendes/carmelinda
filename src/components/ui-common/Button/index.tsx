/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styles from './styles.module.css';

export interface Props {
  id: string;
  layout: 'green' | 'gold';
  href?: string;
  newWindow?: boolean;
}

const Button: React.FC<Props> = ({
  id,
  children,
  href,
  newWindow,
  layout,
  ...props
}) => {
  if (href) {
    if (!newWindow) {
      return (
        <a rel="noreferrer" style={{ textDecoration: 'none' }} href={href}>
          <button {...props} id={id} className={styles[layout]}>
            {children}
          </button>
        </a>
      );
    }
    return (
      /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
      <a
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
        href={href}
      >
        <button {...props} id={id} className={styles[layout]}>
          {children}
        </button>
      </a>
    );
  }
  return (
    <button {...props} id={id} className={styles[layout]}>
      {children}
    </button>
  );
};

export default Button;
