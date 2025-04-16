export interface ContentTypeConfig {
  label: ValidType;
  searchFields: string[];
  populate: Record<string, any>;
  getCategory: (item: any) => string | null;
  getTitle: (item: any) => string;
  getImage: (item: any) => string | null;
  getSlug: (item: any) => string;
  getUrl: (item: any) => string;
  getAuthor: (item: any) => {
    username: string;
    profileImage: string | null;
  } | null;
}

export interface ContentItem {
  documentId: string;
  category: string;
  type: ValidType;
  title: string;
  image: string;
  createdAt: string;
  slug: string;
  url: string;
  author?: {
    name: string;
    username: string;
    profileImage?: string;
  };
}

export interface ApiResponse {
  total: number;
  data: ContentItem[];
}

export type ValidType = "Profesional" | "Portafolio" | "Blog";
