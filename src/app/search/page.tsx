'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import ArticlesList from '@/components/ArticlesList';
import { TextField } from '@mui/material';
import { useDebounce } from 'use-debounce';
import ClientFetch from '@/lib/client-fetch.ts';
import { Article } from '@/types/article-type.ts';
import styles from './search.module.scss';

function Search() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [areArticlesLoading, setAreArticlesLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 1000);

  useEffect(() => {
    async function filterArticles() {
      if (debouncedSearchQuery) {
        setAreArticlesLoading(true);
        const query = `/blogs?filters[title][$containsi]=${debouncedSearchQuery}&sort[0]=createdAt:desc&populate[0]=cover&populate[1]=categories&pagination[limit]=50`;
        const articlesResult = await ClientFetch.get<Article[]>(query);
        setArticles(articlesResult.data);
        setAreArticlesLoading(false);
      } else {
        setAreArticlesLoading(false);
        setArticles([]);
      }
    }

    filterArticles();
  }, [debouncedSearchQuery]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setAreArticlesLoading(true);
    setSearchQuery(event.target.value);
  }

  return (
    <section className={styles.section}>
      <div className={styles.inputContainer}>
        <span className={styles.title}>Buscar artículo:</span>

        <TextField
          className={styles.input}
          onChange={handleChange}
          value={searchQuery}
          placeholder="Buscar..."
        />
      </div>

      {(articles.length === 0 && searchQuery !== '' && !areArticlesLoading) ? (
        <div className={styles.noDataDiv}>
          No se encontraron resultados
        </div>
      ) : null}
      <ArticlesList articles={articles} isLoading={areArticlesLoading} />
    </section>
  );
}

export default Search;
