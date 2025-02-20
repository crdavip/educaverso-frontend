import React from 'react';
import Logo from '../../assets/LogoSoloImagen.svg';
import styles from './footer.module.scss';

function AboutBeunik() {
  // TODO replace lorem ipsum

  const logoSize = 120;
  return (
    <section className={styles.about}>
      <div className={styles.aboutBasicInfo}>
        <Logo className={styles.aboutLogo} width={logoSize} height={logoSize} />
        <div className={styles.aboutRightSide}>
          <span className={styles.aboutTitle}>Educaverso</span>
          <span className={styles.aboutSlogan}>Impulsa tu marca personal.</span>
        </div>
      </div>

      <span className={styles.aboutText}>
        Únete a nuestra comunidad de profesionales y muestra tu talento.
        Comparte tu experiencia y vende tus cursos para alcanzar nuevas oportunidades.
      </span>
    </section>
  );
}

export default AboutBeunik;
