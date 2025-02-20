import React from 'react';
import { ArticleCategory, ArticleCover } from '@/types/article-type.ts';
import CategoryChip from '@/components/CategoryChip';
import ArticleDate from '@/components/ArticleDate';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import BarberIllus from '../../assets/barber.svg';
import styles from './article-preview.module.scss';

type Props = {
  title: string
  date: string
  summary: string | undefined
  cover: ArticleCover | undefined
  category: ArticleCategory | undefined
  id: number
}

function ArticlePreview({
  category, cover, date, summary, title, id,
}: Props) {
  const coverUrl = cover?.data?.attributes.url;
  const router = useRouter();

  function goToArticle() {
    router.push(`/posts/${id}`);
  }

  const imageSize = 200;
  return (
    <article className={styles.article}>
      {category ? (
        <div className={styles.category}>
          <CategoryChip name={category.attributes.name} id={category.id} />
        </div>
      ) : null}
      <Button className={styles.button} onClick={goToArticle}>
        <div className={styles.articleContent}>

          {coverUrl ? (
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${coverUrl})` }} />
          ) : (
            <BarberIllus width={imageSize} height={imageSize} />
          )}

          <div>
            <ArticleDate date={date} />
          </div>

          <div className={styles.textContainer}>
            <div>
              <h3 className={styles.title}>{title}</h3>
            </div>

            <div className={styles.summary}>
              <p>{summary}</p>
            </div>
          </div>
        </div>
      </Button>
    </article>
  );
}

export default ArticlePreview;
