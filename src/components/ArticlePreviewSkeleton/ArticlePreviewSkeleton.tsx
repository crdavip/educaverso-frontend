import React from 'react';
import { Skeleton } from '@mui/material';
import styles from './article-preview-skeleton.module.scss';

function ArticlePreviewSkeleton() {
  return (
    <div className={styles.container}>
      <Skeleton animation="wave" variant="circular" width={100} height={80} className={styles.circle} />
      <div className={styles.rightSide}>
        <Skeleton
          animation="wave"
          height={20}
          width="80%"
        />
        <Skeleton
          animation="wave"
          height={60}
          width="80%"
        />
      </div>
    </div>
  );
};

export default ArticlePreviewSkeleton;
