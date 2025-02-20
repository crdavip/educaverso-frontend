'use client';

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, ClickAwayListener } from '@mui/material';
import NavbarItems from '@/components/Navbar/NavbarItems.tsx';
import classNames from 'classnames';
import styles from './navbar.module.scss';

function MenuButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function onMenuClickAway() {
    if (isOpen) {
      setIsOpen(false);
    }
  }

  const itemsContainerClassNames = classNames({
    [styles.menuButtonItemsContainer]: true,
    [styles.menuButtonItemsContainerVisible]: isOpen,
  });
  return (
    <ClickAwayListener onClickAway={onMenuClickAway}>
      <div className={styles.menuButton}>
        <IconButton
          className={styles.menuButtonIcon}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleOpen}
        >
          {isOpen ? (
            <CloseIcon />
          ) : (
            <MenuIcon />
          )}
        </IconButton>

        <div className={itemsContainerClassNames}>
          <NavbarItems theme="white" direction="column" onItemClick={toggleOpen} />
        </div>
      </div>
    </ClickAwayListener>
  );
}

export default MenuButton;
