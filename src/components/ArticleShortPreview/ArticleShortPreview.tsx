import React from 'react';
import { ArticleCover } from '@/types/article-type.ts';
import Image from 'next/image';
import { Button } from '@mui/material';
import formatArticleDate from '@/helpers/formatArticleDate.tsx';
import classNames from 'classnames';
import styles from './article-short-preview.module.scss';
import BarberIllus from '../../assets/barber.svg';

type Props = {
  title: string
  date: string
  cover: ArticleCover | undefined
  onClick: () => void
  color?: 'default' | 'white'
}

function ArticleShortPreview({
  cover, date, title, onClick, color = 'default',
}: Props) {
  const coverUrl = cover?.data?.attributes.url;

  const containerClassName = classNames({
    [styles.articleContainer]: true,
    [styles.articleContainerWhite]: color === 'white',

  });

  const imageSize = 80;
  return (
    <Button className={styles.article} onClick={onClick}>
      <article className={containerClassName}>
        <div className={styles.articleImageContainer}>
          {coverUrl ? (
            <Image className={styles.articleImage} src={coverUrl} alt={title} width={imageSize} height={imageSize} />
          ) : (
            <BarberIllus width={imageSize} height={imageSize} className={styles.articleImage} />
          )}
        </div>

        <div className={styles.articleRightContent}>
          <span className={styles.articleDate}>{formatArticleDate(date)}</span>
          <span className={styles.articleTitle}>{title}</span>
        </div>
      </article>
    </Button>
  );
}

export default ArticleShortPreview;
