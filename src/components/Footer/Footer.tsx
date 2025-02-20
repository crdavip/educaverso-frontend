import React from 'react';
import LatestArticleList from '@/components/Footer/LatestArticleList.tsx';
import Divider from '@/components/Divider';
import CategoryList from '@/components/Footer/CategoryList.tsx';
import AboutBeunik from '@/components/Footer/AboutBeunik.tsx';
import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerSubtitle}>Últimos artículos</h3>
          <Divider />
          <div>
            <LatestArticleList />
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSubtitle}>Explorar categorías</h3>
          <Divider />
          <div>
            <CategoryList />
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerSubtitle}>Acerca de Educaverso</h3>
          <Divider />
          <div>
            <AboutBeunik />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
