import useSWR from 'swr';
import { RequestResponse, StrapiResponse } from '@/types/requests.ts';
import { Article } from '@/types/article-type.ts';

function useArticlesByCategory(categoryId: number | string): RequestResponse<'articles', Article[]> {
  const query = `/blogs?filters[categories][id][$eq]=${categoryId}&sort[0]=createdAt:desc&populate[0]=cover&populate[1]=categories&pagination[limit]=50`;
  const { data, isLoading, error } = useSWR<StrapiResponse<Article[]>>(query);

  return {
    articles: data?.data || [],
    isLoading,
    isError: error,
  };
}

export default useArticlesByCategory;
