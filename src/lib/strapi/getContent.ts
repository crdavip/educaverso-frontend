import { query } from "./strapi";

export const getReviewsByUser = async (idUser: string) => {
  const { data } = await query(`reviews/?filters[reviewed][documentId][$contains]=${idUser}&populate[reviewer][populate]=*`);
  return data;
};

export const getPortfoliosByUser = async (idUser: string) => {
  const { data } = await query(`portfolios?filters[userDetail][documentId][$contains]=${idUser}&populate=*`);
  return data;
};

export const getCertificatesByUser = async (idUser: string) => {
  const { data } = await query(`certificates?filters[userDetail][documentId][$contains]=${idUser}&populate=*`);
  return data;
}

export const getBlogsByUser = async (idUser: string) => {
  const {data} = await query(`blogs?filters[userDetail][documentId][$contains]=${idUser}&populate=*`);
  return data;
}

export const getBlogBySlug = async (slug: string) => {
  const {data} = await query(`blogs?filters[slug][$contains]=${slug}&populate[userDetail][populate]=*&populate[image][populate]=*`);
  return data;
}