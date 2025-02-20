import React from 'react';
import styles from './footer.module.scss';
import Divider from '@/components/Divider';
import Link from 'next/link';
import Image from 'next/image';
import BeunikLogo from '../../assets/LogoHorizontalWhiteBg.svg';
import BeunikProLogo from '../../assets/LogoProHorizontalWhiteBg.svg';
import { Stack } from '@mui/material';

function DownloadAppLinks() {

  const logoWidth = 190;
  const logoHeight = 50;
  return (
    <section className={styles.badges}>
      <div className={styles.badgesContainer}>
        <Stack alignItems="center">
          <BeunikProLogo width={logoWidth} height={logoHeight} />
          <span className={styles.footerSubtitle2}>Para profesionales</span>
        </Stack>
        <div className={styles.badgesSection}>
          <Link target="_blank" href="https://apps.apple.com/co/app/beunik-pro/id1620465162">
            <Image width={192} height={64} src="/app_store.png" alt="Descargar en app store"/>
          </Link>
          <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.beunik_employees&hl=es_PA&gl=ES">
            <Image width={192} height={64} src="/google_play.png" alt="Descargar en app store"/>
          </Link>
        </div>
      </div>

      <div className={styles.badgesDivider}>
        <Divider />
      </div>

      <div className={styles.badgesContainer}>
        <Stack alignItems="center">
          <BeunikLogo width={logoWidth} height={logoHeight} />
          <span className={styles.footerSubtitle2}>Para clientes</span>
        </Stack>
        <div className={styles.badgesSection}>
          <Link target="_blank" href="https://apps.apple.com/vn/app/beunik-reservas-en-belleza/id1619784929">
            <Image width={192} height={64} src="/app_store.png" alt="Descargar en app store"/>
          </Link>
          <Link target="_blank" href="https://play.google.com/store/apps/details?id=com.beunik_clients&hl=es&gl=US">
            <Image width={192} height={64} src="/google_play.png" alt="Descargar en app store"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppLinks;
