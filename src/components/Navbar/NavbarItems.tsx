'use client';

import React from 'react';
import { Box, MenuItem, Typography } from '@mui/material';
import styles from '@/components/Navbar/navbar.module.scss';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Group, Home, Search, LibraryBooks,
} from '@mui/icons-material';

type Props = {
  theme?: 'default' | 'white';
  direction?: 'row' | 'column';
  onItemClick?: () => void;
};

function NavbarItems({ theme = 'default', direction = 'row', onItemClick = () => {} }: Props) {
  const pathname = usePathname();

  const navbarItems = [
    {
      text: 'Inicio',
      href: '/',
      icon: Home,
    },
    {
      text: 'Cursos',
      href: '/#',
      icon: LibraryBooks,
    },
    {
      text: 'Independientes',
      href: '/#',
      icon: Group,
    },
    {
      text: 'Buscar',
      href: '/search',
      icon: Search,
    },
  ];

  const containerClassNames = classNames({
    [styles.navbarItemsContainer]: true,
    [styles.navbarItemsContainerRow]: direction === 'row',
    [styles.navbarItemsContainerColumn]: direction === 'column',
    [styles.navbarItemsWhiteThemeContainer]: theme === 'white',
  });

  const textClassNames = classNames({
    [styles.navbarItemsText]: true,
    [styles.navbarItemsWhiteThemeText]: theme === 'white',
  });

  const iconClassNames = classNames({
    [styles.navbarItemsWhiteThemeIcon]: theme === 'white',
  });
  return (
    <Box className={containerClassNames}>
      {navbarItems.map((navItem) => {
        const isSelected = navItem.href === pathname;

        const linkClassNames = classNames({
          [styles.navbarItemsLink]: true,
          [styles.navbarItemsWhiteThemeLinkSelected]: isSelected && theme === 'white',
          [styles.navbarItemsLinkSelected]: isSelected && theme === 'default',
        });

        return (
          <Link href={navItem.href} key={navItem.text} className={linkClassNames} onClick={onItemClick}>
            <MenuItem>
              <navItem.icon className={iconClassNames} />
              <Typography className={textClassNames}>{navItem.text}</Typography>
            </MenuItem>
          </Link>
        );
      })}
    </Box>
  );
}

export default NavbarItems;
