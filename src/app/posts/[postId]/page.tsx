'use client';

import React from 'react';
import Image from 'next/image';
import useArticle from '@/hooks/requests/useArticle.ts';
import ArticleDate from '@/components/ArticleDate';
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import CategoryChip from '@/components/CategoryChip';
import { CircularProgress, Divider, Skeleton } from '@mui/material';
import ArticleShortPreview from '@/components/ArticleShortPreview';
import { useRouter } from 'next/navigation';
import styles from './post.module.scss';

type Params = {
  postId: string
}

type Props = {
  params: Params
}

function Post({ params }: Props) {
  const postId = Number(params.postId);
  const router = useRouter();
  const { article, isLoading } = useArticle(postId);

  if (isLoading) {
    return (
      <div className={styles.postSkeletonContainer}>
        <Skeleton sx={{ transform: 'unset' }} className={styles.postSkeletonLeft} animation="wave" />
        <Skeleton sx={{ transform: 'unset' }} className={styles.postSkeletonRight} animation="wave" />
      </div>
    );
  }

  if (!article) {
    return (
      <div className={styles.noDataDiv}>
        Artículo inexistente
      </div>
    );
  }

  const {
    title,
    categories,
    publishedAt,
    cover,
    mainContent,
    similarPosts,
  } = article.attributes;

  function goToArticle(articleId: number) {
    router.push(`/posts/${articleId}`);
  }

  const coverUrl = cover?.data?.attributes.url;
  return (
    <section className={styles.mainContainer}>
      <section className={styles.leftContainer}>
        {coverUrl ? (
          <div className={styles.cover} style={{ backgroundImage: `url(${coverUrl})` }} />
        ) : null}
        <div className={styles.date}>
          <ArticleDate date={publishedAt} />
        </div>

        <div>
          <h3>{title}</h3>
        </div>

        <div>
          <BlocksRenderer
            content={mainContent}
            blocks={{
              image: (props) => {
                return (
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.image}
                      src={props.image.url}
                      alt="Imagen de artículo"
                      sizes="100%"
                      objectFit="contain"
                      fill
                    />
                  </div>
                );
              },
              link: ({ url, children, plainText }) => {
                return (
                  <Link href={url} target="_blank">{children}</Link>
                );
              },
            }}
          />
        </div>
      </section>

      {(categories?.data.length || similarPosts?.data.length) ? (
        <section className={styles.rightContainer}>
          <div className={styles.rightContainerSticky}>
            {similarPosts?.data.length ? (
              <div className={styles.rightSubSection}>
                <span className={styles.subsectionTitle}>Artículos relacionados</span>

                <Divider className={styles.subSectionDivider} />

                {similarPosts?.data.map((article) => {
                  return (
                    <ArticleShortPreview
                      key={article.id}
                      cover={article.attributes.cover}
                      date={article.attributes.publishedAt}
                      title={article.attributes.title}
                      onClick={() => goToArticle(article.id)}
                    />
                  );
                })}
              </div>
            ) : null}


            {categories?.data.length ? (
              <div className={styles.rightSubSection}>
                <span className={styles.subsectionTitle}>Categorías</span>

                <Divider className={styles.subSectionDivider} />

                {categories.data.map((category) => {
                  return (
                    <CategoryChip key={category.id} name={category.attributes.name} id={category.id} />
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

    </section>
  );
}

export default Post;
