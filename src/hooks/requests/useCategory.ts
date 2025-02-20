import useSWR from 'swr';
import { RequestResponse, StrapiResponse } from '@/types/requests.ts';
import { ArticleCategory } from '@/types/article-type.ts';

function useCategory(categoryId: number | string): RequestResponse<'category', ArticleCategory | undefined> {
  const query = `/categories/${categoryId}`;
  const { data, isLoading, error } = useSWR<StrapiResponse<ArticleCategory>>(query);

  return {
    category: data?.data,
    isLoading,
    isError: error,
  };
}

export default useCategory;
