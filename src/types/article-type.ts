import { type BlocksContent } from '@strapi/blocks-react-renderer';


export type ArticleMainContentNode = {
  type: string,
  level?: number // heading level
  text?: string
  format?: 'ordered' | 'unordered'
  children?: ArticleMainContentNode[]
}

export type ArticleCoverFormat = {
  url: string
}

export type ArticleCoverAttributes = {
  url: string
  formats: {
    large: ArticleCoverFormat
    medium: ArticleCoverFormat
    small: ArticleCoverFormat
    thumbnail: ArticleCoverFormat
  }
}

export type ArticleCover = {
  data: {
    id: number
    attributes: ArticleCoverAttributes
  } | null
}

export type Article = {
  id: number
  attributes: {
    title: string
    locale: string
    categories: { data: ArticleCategory[] }
    summary?: string
    cover?: ArticleCover
    similarPosts?: { data: Article[] }
    mainContent: BlocksContent
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export type ArticleCategory = {
  id: number
  attributes: {
    createdAt: string
    updatedAt: string
    name: string
  }
}
