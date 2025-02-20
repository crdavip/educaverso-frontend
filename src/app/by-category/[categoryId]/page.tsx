'use client';

import React from 'react';
import useArticlesByCategory from '@/hooks/requests/useArticlesByCategory.ts';
import ArticlesList from '@/components/ArticlesList';
import useCategory from '@/hooks/requests/useCategory.ts';
import styles from './category.module.scss';

type Params = {
  categoryId: string
}

type Props = {
  params: Params
}

function ByCategoryId({ params }: Props) {
  const { categoryId } = params;
  const { category, isLoading: isCategoryLoading } = useCategory(categoryId);
  const { articles, isLoading } = useArticlesByCategory(categoryId);

  return (
    <section>
      <div className={styles.categoryContainer}>
        <div className={styles.categoryBackground} />
        <div className={styles.categoryText}>
          <span>{category?.attributes.name}</span>
        </div>
      </div>

      <ArticlesList articles={articles} isLoading={isLoading} category={category} />
    </section>
  );
}

export default ByCategoryId;
