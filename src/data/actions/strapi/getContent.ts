import { queryStrapi } from "./strapi";
import { getCoursesByUser, getFakeCourses } from "../courses/getContent";
import { Blog, Certificate, Course, Portfolio, Review } from "@/interfaces";

export const getReviewsByUser = async (idUser: string) => {
  const { data } = await queryStrapi(`reviews/?filters[reviewed][documentId][$contains]=${idUser}&populate[reviewer][populate]=*`);
  return data;
};

export const getPortfoliosByUser = async (idUser: string) => {
  const { data } = await queryStrapi(`portfolios?filters[userDetail][documentId][$contains]=${idUser}&populate=*`);
  return data;
};

export const getPortfolios = async () => {
  const { data } = await queryStrapi(`portfolios?populate[userDetail][populate]=*&populate[images][populate]=*&pagination[pageSize]=9`);
  return data;
}

export const getPortfolioBySlug = async (slug: string) => {
  const { data } = await queryStrapi(`portfolios?filters[slug][$contains]=${slug}&populate[userDetail][populate]=*&populate[images][populate]=*`);
  return data;
}

export const getPortfoliosRelatedByCategory = async (category: string, idPortfolio: string) => {
  const { data } = await queryStrapi(`portfolios?filters[$and][0][userDetail][category][slug][$contains]=${category}&filters[$and][1][documentId][$ne]=${idPortfolio}&populate[userDetail][populate]=*&populate[images][populate]=*&pagination[pageSize]=2`);
  return { data };
};

export const getCertificatesByUser = async (idUser: string) => {
  const { data } = await queryStrapi(`certificates?filters[userDetail][documentId][$contains]=${idUser}&populate=*`);
  return data;
}

export const getBlogs = async () => {
  const { data } = await queryStrapi(`blogs?populate[userDetail][populate]=*&populate[image][populate]=*&pagination[pageSize]=9`);
  return data;
}

export const getBlogsByUser = async (idUser: string) => {
  const { data } = await queryStrapi(`blogs?filters[userDetail][documentId][$contains]=${idUser}&populate=*`);
  return data;
}

export const getBlogBySlug = async (slug: string) => {
  const { data } = await queryStrapi(`blogs?filters[slug][$contains]=${slug}&populate[userDetail][populate]=*&populate[image][populate]=*`);
  return data;
}

export const getBlogsRelatedByCategory = async (category: string, idBlog: string) => {
  const { data } = await queryStrapi(`blogs?filters[$and][0][userDetail][category][slug][$contains]=${category}&filters[$and][1][documentId][$ne]=${idBlog}&populate[userDetail][populate]=*&populate[image][populate]=*&pagination[pageSize]=2`);
  return { data };
};

export const getTotalContents = async (idUser: string, username?: string) => {
  const courses: Course[] = await getCoursesByUser(idUser) ?? getFakeCourses(username);
  const portfolios: Portfolio[] = await getPortfoliosByUser(idUser) ?? [];
  const blogs: Blog[] = await getBlogsByUser(idUser) ?? [];
  const reviews: Review[] = await getReviewsByUser(idUser) ?? [];
  const certificates: Certificate[] = await getCertificatesByUser(idUser) ?? [];

  const totalContents = portfolios.length + blogs.length + reviews.length + certificates.length + courses.length;
  return totalContents;
}
