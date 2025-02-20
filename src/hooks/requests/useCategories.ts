import useSWR from 'swr';
import { RequestResponse, StrapiResponse } from '@/types/requests.ts';
import { ArticleCategory } from '@/types/article-type.ts';

function useCategories(): RequestResponse<'categories', ArticleCategory[]> {
  const query = '/categories?pagination[limit]=12';
  const { data, isLoading, error } = useSWR<StrapiResponse<ArticleCategory[]>>(query);

  return {
    categories: data?.data || [],
    isLoading,
    isError: error,
  };
}

export default useCategories;
