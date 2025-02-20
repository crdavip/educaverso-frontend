import useSWR from 'swr';
import { RequestResponse, StrapiResponse } from '@/types/requests.ts';
import { Article } from '@/types/article-type.ts';

function useLatestArticles(): RequestResponse<'latestArticles', Article[]> {
  const query = '/blogs?pagination[limit]=3&sort[0]=createdAt:desc&populate=cover';
  const { data, isLoading, error } = useSWR<StrapiResponse<Article[]>>(query);

  return {
    latestArticles: data?.data || [],
    isLoading,
    isError: error,
  };
}

export default useLatestArticles;
