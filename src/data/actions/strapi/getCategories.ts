import { queryStrapi } from "./strapi";

export const getCategories = async () => {
  const { data } = await queryStrapi("categories");
  return data;
};

export const getCategoriesBySlug = async (slug: string) => {
  const { data } = await queryStrapi(`categories?filters[slug][$contains]=${slug}`);
  return data;
};

export const getProfessions = async () => {
  const { data } = await queryStrapi(`professions?pagination[page]=1&pagination[pageSize]=100&populate=*`);
  return data;
};
