import { queryStrapi } from "./strapi";
import { getCoursesByUser } from "../courses/getContent";
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

export const getTotalContents = async (idUser: string) => {
  const courses: Course[] = await getCoursesByUser(idUser) ?? [];
  const portfolios: Portfolio[] = await getPortfoliosByUser(idUser) ?? [];
  const blogs: Blog[] = await getBlogsByUser(idUser) ?? [];
  const reviews: Review[] = await getReviewsByUser(idUser) ?? [];
  const certificates: Certificate[] = await getCertificatesByUser(idUser) ?? [];

  const totalContents = portfolios.length + blogs.length + reviews.length + certificates.length + courses.length;
  return totalContents;
}
