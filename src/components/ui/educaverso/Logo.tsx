import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/LogoHorizontal.svg" alt="Logo" width={100} height={100} className={styles.logo} />
    </Link>
  );
};
