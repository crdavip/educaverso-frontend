import useSWR from 'swr';
import { RequestResponse, StrapiResponse } from '@/types/requests.ts';
import { Article } from '@/types/article-type.ts';

function useArticle(articleId: number): RequestResponse<'article', Article | undefined> {
  const query = `/blogs/${articleId}?populate[cover]=*&populate[categories]=*&populate[similarPosts][populate]=cover`;
  const { data, isLoading, error } = useSWR<StrapiResponse<Article>>(query);

  return {
    article: data?.data,
    isLoading,
    isError: error,
  };
}

export default useArticle;
