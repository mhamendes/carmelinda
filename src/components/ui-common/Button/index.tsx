/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

export interface Props extends React.HTMLProps<HTMLButtonElement> {
  layout: 'green-button' | 'gold-button' | 'link' | 'menu-button';
  href?: string;
  newWindow?: boolean;
  anchor?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  href,
  newWindow,
  layout,
  anchor,
  className,
  ...props
}) => {
  const getClasses = (...classToAdd: string[]) =>
    [className, ...classToAdd].join(' ');

  const url = anchor ? `#${href}` : href || '';

  if (href) {
    if (!newWindow) {
      return (
        <Link href={url}>
          <a>
            <button
              {...props}
              type="button"
              className={getClasses(styles[layout])}
            >
              {children}
            </button>
          </a>
        </Link>
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
        <button {...props} type="button" className={getClasses(styles[layout])}>
          {children}
        </button>
      </a>
    );
  }
  return (
    <button {...props} type="button" className={getClasses(styles[layout])}>
      {children}
    </button>
  );
};

export default Button;
