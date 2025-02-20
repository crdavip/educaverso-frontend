import React from 'react';
import { Skeleton } from '@mui/material';
import ArticlePreview from '@/components/ArticlePreview';
import { Article, ArticleCategory } from '@/types/article-type';
import styles from './articles-list.module.scss';

type Props = {
  articles: Article[]
  isLoading: boolean
  category?: ArticleCategory
}

function ArticlesList({ articles, isLoading, category }: Props) {
  const skeletonHeight = 400;
  const skeletonWidth = 300;
  return (
    <div className={styles.container}>
      {isLoading ? (
        <div className={styles.skeletonsContainer}>
          <Skeleton sx={{ transform: 'unset' }} width={skeletonWidth} height={skeletonHeight} animation="wave" />
          <Skeleton sx={{ transform: 'unset' }} width={skeletonWidth} height={skeletonHeight} animation="wave" />
          <Skeleton sx={{ transform: 'unset' }} width={skeletonWidth} height={skeletonHeight} animation="wave" />
        </div>
      ) : (
        articles.map((article) => {
          const { attributes, id } = article;
          const {
            title, publishedAt, summary, cover, categories,
          } = attributes;
          return (
            <ArticlePreview
              id={id}
              key={id}
              title={title}
              date={publishedAt}
              summary={summary}
              cover={cover}
              category={category || categories.data[0]}
            />
          );
        })
      )}

    </div>
  );
}

export default ArticlesList;
