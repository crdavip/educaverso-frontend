import { queryStrapi } from "./strapi";

export const getUsers = async () => {
  const { data, meta } = await queryStrapi(`user-details?populate=*`);
  return { data, pagination: meta.pagination };
};

export const getUsersByCategory = async (category: string) => {
  const { data, meta } = await queryStrapi(`user-details?filters[category][slug][$contains]=${category}&populate=*`);
  return { data, pagination: meta.pagination };
};

export const getUserByUserName = async (username: string) => {
  const { data } = await queryStrapi(`user-details?filters[user][username][$contains]=${username}&populate=*`);
  return { data };
};

export const getUserByIdUser = async (idUser: string) => {
  const { data } = await queryStrapi(`user-details?filters[user][documentId][$contains]=${idUser}&populate=*`);
  return { data };
};

