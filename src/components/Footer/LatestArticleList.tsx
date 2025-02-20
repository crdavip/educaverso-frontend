'use client';

import React from 'react';
import useLatestArticles from '@/hooks/requests/useLatestArticles.ts';
import ArticleShortPreview from '@/components/ArticleShortPreview';
import { useRouter } from 'next/navigation';
import styles from './footer.module.scss';
import ArticlePreviewSkeleton from '@/components/ArticlePreviewSkeleton';

function LatestArticleList() {
  const router = useRouter();
  const { latestArticles, isLoading } = useLatestArticles();

  function handleArticleClick(articleId: number) {
    router.push(`/posts/${articleId}`);
  }

  return (
    <section className={styles.latestArticlesContainer}>
      {isLoading ? (
        <>
          <ArticlePreviewSkeleton />
          <ArticlePreviewSkeleton />
          <ArticlePreviewSkeleton />
        </>
      ) : (
        latestArticles.map((article) => (
          <ArticleShortPreview
            color="default"
            key={article.id}
            title={article.attributes.title}
            date={article.attributes.publishedAt}
            cover={article.attributes.cover}
            onClick={() => handleArticleClick(article.id)}
          />
        ))
      )}
    </section>
  );
}

export default LatestArticleList;
