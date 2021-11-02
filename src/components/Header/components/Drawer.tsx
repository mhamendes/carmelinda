import React from 'react';

import { SwipeableDrawer, MenuItem } from '@material-ui/core';
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu';

import Button from 'components/ui-common/Button';
import WhatsAppButton from 'components/WhatsAppButton';

import { Option } from '../index';
import styles from '../styles.module.scss';

export interface Props {
  options: Option[];
}

const Drawer: React.FC<Props> = ({ options }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles['drawer-container']}>
      <GiHamburgerMenu
        className={styles['menu-button']}
        onClick={() => setOpen(!open)}
      />
      <SwipeableDrawer
        anchor="right"
        keepMounted
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        {options.map((item) => {
          return (
            <MenuItem
              key={item.label}
              onClick={() => setOpen(false)}
              className={styles['drawer-items']}
            >
              <Button
                layout="link"
                href={item.link}
                anchor={item.anchor}
                className={styles['drawer-buttons']}
              >
                {item.label}
              </Button>
            </MenuItem>
          );
        })}
        <MenuItem
          onClick={() => setOpen(false)}
          className={styles['drawer-items']}
        >
          <WhatsAppButton />
        </MenuItem>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
