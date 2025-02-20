import React from 'react';
import { CalendarMonth } from '@mui/icons-material';
import formatArticleDate from '@/helpers/formatArticleDate.tsx';
import styles from './article-date.module.scss';

type Props = {
  date: string
}

function ArticleDate({ date }: Props) {
  return (
    <div className={styles.container}>
      <CalendarMonth className={styles.icon} />
      <span className={styles.text}>{formatArticleDate(date)}</span>
    </div>
  );
}

export default ArticleDate;
