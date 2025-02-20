'use client';

import React from 'react';
import useCategories from '@/hooks/requests/useCategories.ts';
import { Skeleton } from '@mui/material';
import CategoryChip from '@/components/CategoryChip';
import styles from './footer.module.scss';

function CategoryList() {
  const { categories, isLoading } = useCategories();

  const skeletonsToGenerate = 3;
  return (
    <section className={styles.categoryList}>
      {isLoading ? (
        <div className={styles.categoryListSkeletonContainer}>
          {[...Array(skeletonsToGenerate)].map(() => (
            <Skeleton
              key={Date.now() + Math.random()}
              variant="rounded"
              animation="wave"
              height={30}
              width={120}
            />
          ))}
        </div>
      ) : (
        categories.map((category) => (
          <CategoryChip key={category.id} id={category.id} name={category.attributes.name} />
        ))
      )}
    </section>
  );
}

export default CategoryList;
