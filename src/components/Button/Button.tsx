import Link from 'next/link';
import styles from './button.module.scss'

type Props = {
  text: string
  alt?: boolean
  url: string
}

function Button({ text, alt = false, url }: Props) {
  return (
    <Link href={url} className={`${styles.btn} ${alt ? `${styles.btnAlt}` : ''}`}>
      {text}
    </Link>
  );
}

export default Button;
