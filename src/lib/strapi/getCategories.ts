import { query } from "./strapi";

export const getCategories = async () => {
  const { data } = await query("categories");
  return data;
};

export const getCategoriesBySlug = async (slug: string) => {
  const { data } = await query(`categories?filters[slug][$contains]=${slug}`);
  return data;
};
