import { Footer, TopMenu } from "@/components";
import styles from "./welcome.module.scss";

interface Props {
    children: React.ReactNode;
}

export default function WelcomeLayout({children}: Props) {
  return (
    <>
    <TopMenu />
    <main>
      {children}
    </main>
    <div className={styles.footerMobile}>
      <Footer />
    </div>
    </>
  );
}