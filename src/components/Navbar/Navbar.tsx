import React from 'react';
import {
  AppBar, Toolbar,
} from '@mui/material';
import Logo from '@/assets/LogoHorizontalWhiteBg.svg';
import Link from 'next/link';
import MenuButton from '@/components/Navbar/MenuButton.tsx';
import NavbarItems from '@/components/Navbar/NavbarItems.tsx';
import styles from './navbar.module.scss';

function Navbar() {
  return (
    <nav>
      <AppBar position="static" className={styles.navbar}>
        <div className={styles.navbarMenuButton}>
          <MenuButton />
        </div>
        <Toolbar className={styles.navbarToolbar}>
          <div className={styles.navbarContent}>
            <Link href="/">
              <Logo className={styles.navbarLogo} width={180} height={100} />
            </Link>

            <div className={styles.navbarItems}>
              <NavbarItems />
            </div>

          </div>
        </Toolbar>
      </AppBar>
    </nav>
  );
}

export default Navbar;
