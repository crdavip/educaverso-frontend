'use client';

import React from 'react';
// import useArticles from '@/hooks/requests/useArticles.ts';
// import ArticlesList from '@/components/ArticlesList';
import Hero from '@/components/Hero';
import Info from '@/components/Info';
import Profits from '@/components/Profits';
import Testimonial from '@/components/Testimonial';

export default function Home() {
  // const { isLoading, articles } = useArticles();

  return (
    <>
      <Hero />
      <Info />
      <Profits />
      <Testimonial />
      {/* <ArticlesList isLoading={isLoading} articles={articles} /> */}
    </>
  );
}
